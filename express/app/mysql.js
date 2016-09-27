var mysql = require('mysql');
var express = require('express');
var app = express();
var result=null;
(function(){
	var connection = mysql.createConnection({
		host:'localhost',
		user:'root',
		password:'123456',
		database:'my_node_db'
	});
	connection.connect();
	connection.query({
		sql:"DELETE FROM `student` WHERE name='bruce1'",
		timeout:40000
	},function(err,results){
		if(err) throw err;
		console.log(results[0]);	
	});
	connection.end();
})();
	
app.get('/sql',function(req,res){	
	res.send('数据插入成功！');
}).listen(3000);

