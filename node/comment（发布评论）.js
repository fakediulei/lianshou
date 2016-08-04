var http=require('http');
var querystring=require('querystring');
var postData=querystring.stringify({
	'callCount':1,
	'scriptSessionId':'${scriptSessionId}187',
	'c0-scriptName':'BlogBeanNew',
	'c0-methodName':'addBlogComment',
	'c0-id':0,
	'c0-e1':'string:fks_087071093080083075083082086074072084082064081094080067083080',
	'c0-e2':'number:233586076',
	'c0-e3':'string:',
	'c0-e4':'string:%E8%BF%99%E7%AF%87%E6%96%87%E7%AB%A0%E4%B8%8D%E9%94%99%EF%BC%8C%E5%80%BC%E7%9A%84%E6%8E%A8%E8%8D%90%EF%BC%8C%E5%93%88%E5%93%88%EF%BC%81',
	'c0-e5':'string:842235390',
	'c0-e6':'string:',
	'c0-e7':'number:-1',
	'c0-e8':'number:-1',
	'c0-e9':'number:233586076',
	'c0-e10':'string:fuckeggegg',
	'c0-e11':'string:842235390',
	'c0-e12':'boolean:true',
	'c0-param0':'Object_Object:{blogId:reference:c0-e1,blogUserId:reference:c0-e2,blogTitle:reference:c0-e3,content:reference:c0-e4,publisherNickname:reference:c0-e5,publisherEmail:reference:c0-e6,mainComId:reference:c0-e7,replyComId:reference:c0-e8,replyToUserId:reference:c0-e9,replyToUserName:reference:c0-e10,replyToUserNick:reference:c0-e11,synchMiniBlog:reference:c0-e12}',
	'c0-param1':'string:',
	'c0-param2':'boolean:false',
	'batchId':583440
});
var options={
	hostname:'api.blog.163.com',
	port:80,
	path:'/fuckeggegg/dwr/call/plaincall/BlogBeanNew.addBlogComment.dwr',
	method:'POST',
	headers:{
		'Accept':'*/*',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'text/plain',
		'Cookie':'_ntes_nuid=4bf0c38792803e62b295daa5e172eba1; _ntes_nnid=ef752ae9dad3565f6b451a1e98153407,1458112311584; vjuids=9314a235b.15383287e59.0.07485433; vjlast=1458194382.1458194382.30; vinfo_n_f_l_n3=7cbb2c522158d240.1.2.1458112311595.1458194385602.1458634215429; usertrack=c+5+hlb09VWHU1MDDMHiAg==; NTESBLOGSI=C6FE5C0E9312DCA399B3D6059C8AC1A9.blog171-8010; Province=0590; City=0793; NTES_SESS=nuWViLkEUwi7p3QeKWyo0wQAR3mcIrsY.Jkg.KXOOxFtZ2qhZLps8NiSExk425xVXs8LZIzkaTBKfS3RSH32C1f9psd1HptVJ_DtgaMeK.L9lxskIxC_5uuks7J5KVonb4RexQNohJpGmxuro.nwdeq2tXag1jhAUzlsX69UrVere_o43w86mnh.s; S_INFO=1460540699|0|1&25#3&20#3&80|842235390@qq.com; P_INFO=842235390@qq.com|1460540699|0|163|11&13|jis&1446210747&urs#fuj&350200#10#0#0|&0||842235390@qq.com; BLOG_FOLLOW_VIEW_TYPE=233586076:0; _gat=1; NTESBLOGMSGSI=5DB4172CBC003BD7B2E938B4E7BAA8FC.blog22-8010; NETEASE_AUTH_SOURCE=space; NETEASE_AUTH_USERNAME=fuckeggegg; _ga=GA1.2.1679150563.1458894191; iframe_adwin=1',
		'Host':'api.blog.163.com',
		'Origin':'http://api.blog.163.com',
		'Referer':'http://api.blog.163.com/crossdomain.html?t=20100205',
		'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.116 Safari/537.36'
	}
}
var req=http.request(options,function(res){
	console.log('Status:'+res.statusCode);
	console.log('headers:'+JSON.stringify(res.headers));
	res.on('data',function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof chunk);
	});
	res.on('end',function(){
		console.log('评论完毕！');
	});
	
});
	req.on('error',function(e){
		console.log('Error'+e.message);
	});
	req.write(postData);
	req.end();
