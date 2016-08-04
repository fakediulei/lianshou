var express=require('express');
var bodyParser = require('body-parser');
var path=require('path');
var mongoose=require('mongoose');
var session=require('express-session');
var MongoStore=require('connect-mongodb');
var cookieParser=require('cookie-parser');
var logger=require('morgan');
var port=process.env.PORT||3000;
var app=express();
var dbUrl='mongodb://localhost/imooc';
mongoose.connect(dbUrl);//链接数据库
mongoose.connection.on("error", function (error) {
    console.log("数据库连接失败：" + error);
});
mongoose.connection.on("open", function () {
    console.log("------数据库连接成功！------");
});
app.set('views','./views/pages');//视图文件的路径
app.set('view engine','jade');//使用jade模板引擎
app.use(bodyParser.urlencoded({extended:true}));//格式化表单
app.use(cookieParser());
app.use(session({
	secret:'imooc',
	store:new MongoStore({
		url:dbUrl,
		collection:'sessions'
	})
}));

if('development'===app.get('env')){
	app.set('showStackError',true);
	app.use(logger(':method :url :status'));
	app.locals.pretty=true;
	mongoose.set('debug',true);
}

require('./config/routes.js')(app);

app.use(express.static(path.join(__dirname,'public')));//静态资源的路径
app.locals.moment=require('moment');
app.listen(port);
console.log('imooc started at port '+port);






