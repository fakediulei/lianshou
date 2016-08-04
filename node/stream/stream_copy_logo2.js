var fs=require('fs');
var readStream=fs.createReadStream('1.pdf');
var writeStream=fs.createWriteStream('1-stream.pdf');
readStream.on('data',function(chunk){
	if(!writeStream.write(chunk)){
		console.log('still in cache');
		readStream.pause();	
	}
});
readStream.on('end',function(){
	writeStream.end();
});
writeStream.on('drain',function(){
	console.log('data drains');
	readStream.resume();
})
