if(navigator.userAgent.toLowerCase().indexOf('msie 9')!=-1||navigator.userAgent.toLowerCase().indexOf('msie 8')!=-1||navigator.userAgent.toLowerCase().indexOf('msie 7')!=-1){
		console.log('nonsupport placeholder!');
		$(function(){
			$('form input[placeholder]').focus(function(){
					var input=$(this);
					if(input.val()==input.attr('placeholder')){
						input.val('').removeClass('placeholder');
					}
				}).blur(function(){
					var input=$(this);
					if(input.val()==''){
						input.val(input.attr('placeholder')).addClass('placeholder');
					}
				}).blur();
		});
}