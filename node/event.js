var EventEmitter=require('events').EventEmitter;
var life=new EventEmitter();
life.setMaxListeners(11);
function water(who){
	console.log("给 "+who+" 倒水1吧！");
}

life.on("求安慰",water);
life.on("求安慰",function(who){
		console.log("给 "+who+" 倒水2吧！");
});
life.on("求安慰",function(who){
		console.log("给 "+who+" 倒水3吧！");
});
life.on("求安慰",function(who){
		console.log("给 "+who+" 倒水4吧！");
});
life.on("求安慰",function(who){
		console.log("给 "+who+" 倒水5吧！");
});
life.on("求安慰",function(who){
		console.log("给 "+who+" 倒水6吧！");
});
life.on("求安慰",function(who){
		console.log("给 "+who+" 倒水7吧！");
});
life.on("求安慰",function(who){
		console.log("给 "+who+" 倒水8吧！");
});
life.on("求安慰",function(who){
		console.log("给 "+who+" 倒水9吧！");
});
life.on("求安慰",function(who){
		console.log("给 "+who+" 倒水10吧！");
});
life.on("求安慰",function(who){
		console.log("给 "+who+" 倒水11吧！");
});
life.on("不干",function(who){
		console.log(who+"拒绝倒水10吧！");
});
life.removeAllListeners();
console.log(life.listeners('求安慰').length);
console.log(EventEmitter.listenerCount(life,'求安慰'));
life.emit('求安慰','哈比');
life.emit('不干','mei');
