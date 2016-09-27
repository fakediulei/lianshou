var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('Get resource to homepage!');
});
app.get('/user/:userId/password/:password',function(req,res){
	res.send(req.params);
});
app.use(function(req,res){
	res.status(404).send('请求错误！');
});
app.listen(3000,function(){
	console.log('Server running at localhost:3000');
});
