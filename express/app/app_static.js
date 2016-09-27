var express = require('express');
var app = express();
app.use('/resource',express.static(__dirname+'/public'));

app.use(function(req,res,next){
	res.status(404).send('Something broke!');
});
app.listen(3000,function(){
	console.log('server running at 3000!');
});
