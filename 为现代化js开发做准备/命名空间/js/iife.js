(function(myapp){
	myapp.sayHello=function(){
		console.log('Hello my immediately invoked function expression')
	}
	return myapp;
})(window.aa=window.aa||{});//将对象挂在window上，然后在对象上挂在方法，变量。防止变量被污染和其他插件引起冲突啥的