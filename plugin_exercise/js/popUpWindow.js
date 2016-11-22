(function($){
	function popUp(obj){
		var _self=this;
		_self.opetion={
			content_width:'400px',
			content_height:'200px',
			content_text:"确认提示框"			
		};
		_self.config=$.extend(_self.opetion,obj);
		_self.mask=$("<div class='popUp_bg' id="+_self.config.id+"></div>").css({
			position:'fixed',
			left:'0',
			right:'0',
			top:'0',
			bottom:'0',
			zIndex:'1000',
			background:'#000',
			opacity:'0.7',
			filter:"alpha(opacity=70)",
			height:'100%',
			display:'none'
		});
		_self.content_wrap=$("<div class='popUp_content_wrap'></div>").css({
			width:_self.config.content_width,
			minHeight:'90px',
			background:'#fff',
			position:'fixed',
			top:'0',
			left:'0',
			bottom:'0',
			right:'0',
			height:_self.config.content_height,
			margin:'auto'
		});
		_self.content=$("<div class='popUp_content'></div>").css({
			marginTop:'38px',
			padding:'0 10px'
		});
		_self.close_btn=$("<span class='close'>×</span>").css({
			position:'absolute',
			right:'10px',
			top:"10px",
			cursor:"pointer"
		});
	}
	popUp.prototype={
		init:function(){
			var _self=this;
			_self.mask.append(_self.content_wrap.append(_self.close_btn));
			_self.content_wrap.append(_self.content.append(_self.config.content_text));
			$('body').append(_self.mask);
			_self.closeBtnClick();
			_self.spaceClick();
		},
		closeBtnClick:function(){
			var _self=this;
			_self.close_btn.on('click',function(){
				_self.mask.hide();	
			});
		},
		spaceClick:function(){
			var _self=this;
			 _self.mask.click(function(e){
			  var _tar = _self.content_wrap;   // 设置目标区域
			  if(!_tar.is(e.target) && _tar.has(e.target).length === 0){ // Mark 1
			   _self.mask.hide();		
			  }
			});
		}
	}
	$.fn.popUp=function(obj){
		var a=new popUp(obj);
		a.init();
		console.log($(this));
	}
})(jQuery||window.jQuery);
/*
	$(document).popUp({
		content_width:"500px",//弹窗宽度
		content_height:"500px",//弹窗高度
		content_text:"这里是配置的弹窗内容文字！",//弹窗内容文字
		id:"popUp1"
	});
 */