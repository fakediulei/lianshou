var http = require('http'),
	url = require('url');
	/*加载文件模块*/
var router = require('./router.js');
http.createServer(function(req,res){
	var pathname = url.parse(req.url).pathname;
	req.setEncoding('utf8');
	res.writeHead(200,{'Content-Type':'text/html'});
	router.router(req,res,pathname);	
}).listen(3000,"127.0.0.0.1");
console.log('Server running at 127.0.0.1:3000');
