
//insert element after targetElemnt
function insertAfter(newElement,targetElment){
	var parent=targetElment.parentNode;
	if(parent.lastChild==targetElment){
		parent.appendChild(newElement);
	}
	else{
		parent.insertBefore(newElement,targetElment.nextSibling);
	}
}
//add functions to window.onload
function addLoadEvent(func){
	var oldonload=window.onload;
	if(typeof window.onload!='function'){
		window.onload=func;
	}else{
		window.onload=function(){
			oldonload();
			func();
		}
	}
}
//move function(control left and top)
function moveElement(elementID,final_x,final_y,interval){
				if(!document.getElementById){return false;}
				if(!document.getElementById(elementID)){return false;}
				var elem=document.getElementById(elementID);
				if(elem.movement){clearTimeout(elem.movement)}
				if(!elem.style.left){elem.style.left='0px';}
				if(!elem.style.top){elem.style.top='0px';}
				var xpos=parseInt(elem.style.left);
				var ypos=parseInt(elem.style.top);
				var dist=0;
				if(xpos==final_x&&ypos==final_y){return false;}
				if(xpos<final_x){
					dist=Math.ceil((final_x-xpos)/10);
					xpos=xpos+dist;
				}
				if(xpos>final_x){
					dist=Math.ceil((xpos-final_x)/10);
					xpos=xpos-dist;
				}
				if(ypos<final_y){
					dist=Math.ceil((final_y-ypos)/10);
					ypos=ypos+dist;
				}
				if(ypos>final_y){
					dist=Math.ceil((ypos-final_y)/10);
					ypos=ypos-dist;
				}
				elem.style.left=xpos+'px';
				elem.style.top=ypos+'px';
				var repeat="moveElement('"+elementID+"',"+final_x+','+final_y+','+interval+")";
				elem.movement=setTimeout(repeat,interval);
		}
//turn images into gray
	function createGSCanvas(img){
		var canvas=document.createElement('canvas');
		canvas.width=img.width;
		canvas.height=img.height;
		var ctx=canvas.getContext('2d');
		ctx.drawImage(img,0,0);
		var c=ctx.getImageData(0,0,img.width,img.height);
		for(i=0;i<c.height;i++){
			for(j=0;j<c.width;j++){
				var x=(i*4)*c.width+(j*4);
				var r=c.data[x];
				var g=c.data[x+1];
				var b=c.data[x+2];
				c.data[x]=c.data[x+1]=c.data[x+2]=(r+g+b)/3;
			}
		}
		ctx.putImageData(c,0,0,0,0,c.width,c.height);
		return canvas.toDataURL();
	}
//fix the placeholder support in lower version IE,together width the function prepareForms below
function resetFields(whichform){
	if(Modernizr.input.placeholder){return;}
	for(var i=0;i<whichform.elements.length;i++){
		var element = whichform.elements[i];
		if(element.type=='submit'){continue;}
		var check = element.placeholder || element.getAttribute('placeholder');
		if(!check){continue;}
		element.onfocus=function(){
			var text = this.placeholder || this.getAttribute('placeholder');
			if(this.value == text){
				this.className='';
				this.value='';			
			}
		}
		element.onblur=function(){
			if(this.value==''){
				this.className='placeholder';//use this class to set the color of placeholder
				this.value=this.placeholder || this.getAttribute('placeholder');
			}
		}
		element.onblur();
	}
}
	
function prepareForms(){ //prepare form
	for(var i=0;i<document.forms.length;i++){
		var thisform = document.forms[i];
		resetFields(thisform);
		thisform.onsubmit=function(){
			return validateForm(this);
		}
	}
}

function isFilled(field){//validate required form element
	if(field.value.replace(' ','').length==0){return false;}
	var placeholder = field.placeholder || field.getAttribute('placeholder');
	return (field.value !=placeholder);
}
function isEmail(field){//validate email
	return (field.value.indexOf('@')!=-1&&field.value.indexOf('.')!=-1);
}
function validateForm(whichform){
	for(var i=0;i<whichform.elements.length;i++){
		var element = whichform.elements[i];
		if(element.required == true || element.required== 'required' || element.getAttribute('required')=='required'){//IE use element.required== 'required'
			if(!isFilled(element)){
				alert('Please fill in the '+element.name+' field.');
				return false;
			}
		}
		if(element.name=='email'){//ie9 unsupport type='email' element
			if(!isEmail(element)){
				alert('The '+element.name+' field must be a valid email address.');
				return false;
			}
		}
	}
	return true;
}