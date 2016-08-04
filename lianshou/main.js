process.on('exit',function(code){
	setTimeout(function(){
		console.log("该代码不会执行");
	});
	console.log("退出码：",code);
});
