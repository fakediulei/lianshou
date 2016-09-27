var fs = require('fs');
function getFileData(callback){
	fs.readFile('index.conf',function(err,data){
		callback(data);
	});
}
function returnData(callback){
	getFileData(function(data){
		setTimeout(function(){
			callback(data);
		},1000);
	});
};
function shuchu(data){
	console.log(data);
}
returnData(shuchu);
/*fs.readFile('index.conf','utf-8',function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log(data);		
	}

});*/
