var http = require('http');
http.createServer(function(req,res){
	res.writeHead(200,{'Cont-type':'text/plain'});
	res.write("Resquest success!");
	res.end();
}).listen(2015);
console.log("Server running at http://127.0.0.1:2015");
