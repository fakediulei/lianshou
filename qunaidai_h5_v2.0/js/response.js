/*auto set html font-size*/
	_resize();
	window.addEventListener('resize', _resize, false);
	function _resize(){
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