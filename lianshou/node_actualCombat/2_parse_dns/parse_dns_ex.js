var http = require('http'),
	dns = require('dns'),//dns解析模块
	fs = require('fs'),//文件读取模块
	url = require('url'),//地址解析模块
	querystring = require('querystring');//获取请求参数模块
function goIndex(res,req){
	var readPath = __dirname+'/'+url.parse('index.html').pathname;//获取index.html路径，__dirname当前js所在的路径
	var indexPage = fs.readFileSync(readPath);//读取index.html数据，并存在变量里（同步读取，阻塞模式）
	res.end(indexPage);//返回index.html到客户端
}
function getDns(postData,callback){
	var domain = querystring.parse(postData).search_dns;//获取表单传递过来的字段serch_dns
	dns.resolve(domain,function(err,addresses){
		if(!addresses){
			addresses=['不存在域名'];
		}
		callback(domain,addresses);
	})
}
function parseDns(res,req){
	var postData = "";
	req.addListener("data",function(postDataChunk){
		postData+=postDataChunk;
	});
	req.addListener("end",function(){
		var retData = getDns(postData,function(domain,address){
			res.writeHead(200,{'Content-Type':'text/html'});
			res.end("<html><head><meta charset='utf-8'></head><div style='text-align:center;'>Domain:<span style='color:red'>"+domain+"</span>IP:<span style='color:red;'>"+address.join(',')+"</span></div></html>");
		});
		return;
	});
}
function router(res,req,pathname){
	switch(pathname){
		case '/parse':
			parseDns(res,req)
		break;
		default:
			goIndex(res,req);
	}
}
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	var pathname = url.parse(req.url).pathname;
	req.setEncoding('utf8');
	router(res,req,pathname);
}).listen(3000,'192.168.14.48');
console.log('Server running at http://192.168.14.48:3000');


