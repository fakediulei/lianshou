(function(myCode){
myCode._resize=function(){
	if(document.documentElement.clientWidth>640){
			document.querySelector('html').style.fontSize='64px';
		}
		else if(document.documentElement.clientWidth<320){
			document.querySelector('html').style.fontSize='32px';
		}
		else{
			document.querySelector('html').style.fontSize=document.documentElement.clientWidth/10+'px';
		}
}
myCode._resize();
window.addEventListener('resize',myCode._resize, false);
})(window.myCode=window.myCode||{});
alert("response");