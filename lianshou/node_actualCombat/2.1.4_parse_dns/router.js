var ParseDns = require('./parse_dns.js'),
	MainIndex = require('./main_index.js');

exports.router = function(res,req,pathname){
	switch(pathname){//根据pathname来路由调用处理逻辑
		case '/parse':
			ParseDns.parseDns(res,req);break;
		default:
			MainIndex.goIndex(res,req);
	}
}
