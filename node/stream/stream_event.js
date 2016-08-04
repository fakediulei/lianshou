var fs=require('fs');
var readStream=fs.createReadStream('stream_copylogo.js');
readStream.on('data',function(chunk){
	console.log('data emits');
	console.log(Buffer.isBuffer(chunk));
	console.log(chunk.toString('utf8'));
}).on('readable',function(){
	console.log('data readable');
}).on('end',function(){
	console.log('data ends');
}).on('close',function(){
	console.log('data closed');
}).on('error',function(e){
	console.log('data read error'+e);
})
