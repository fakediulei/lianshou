var express = require('express');
var app = express();
function requestTime(req,res,next){
	var time= new Date(),y=time.getFullYear(),m=time.getMonth()+1,d=time.getDate();
	req.requestTime=y+'/'+m+'/'+d;
	next();
};
app.use(requestTime);
app.get('/',function(req,res){
	var responseTxt = 'Hello World!<br>';
	responseTxt+='<small>Request at:'+req.requestTime+'</small>';	
	res.send(responseTxt);
});
app.listen(3000);
