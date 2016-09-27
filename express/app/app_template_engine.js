var express = require('express');
var app = express();
app.set('view engine','pug');
app.use(function(err,req,res,next){
	console.log(err.stack);
	res.status(500).send('Something broke!');
});
app.get('/',function(req,res){
	res.render('index',{title:'Hey',message:'Hello there!'});
}).listen(3000,function(){
	console.log('server running at .....');
});
