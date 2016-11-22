(function($){
$.fn.extend({
	fixedImg:function(options){
		var _self=this;
		_self.default_setting={
			wrap_width:"400px",
			wrap_height:"400px"
		}
		_self.config=$.extend(_self.default_setting,options);
		_self.img=_self.find('img');
		_self.css({
			"position":"relative",
			"width":_self.config.wrap_width,
			"height":_self.config.wrap_height,
			"margin":"0 auto"			
		});
		_self.img.css({
			"position":"absolute",
			"top":0,
			"right":0,
			"bottom":0,
			"left":0,
			"margin":"auto"
		});
		_self.init=function(){
			var w=_self.img.css('width'),
				h=_self.img.css('height');
			if(w>=h){
				_self.img.css("width","100%");
			}else{
				_self.img.css("height","100%");				
			}
		}
		_self.init();
		return _self;
	}
});
})(jQuery||window.jQuery);
/*
	$(target).fixedImg({
	wrap_width:"500px",
	wrap_height:"500px"				
	});
 * */