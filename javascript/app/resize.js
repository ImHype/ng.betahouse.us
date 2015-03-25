var bodyheight = document.documentElement.clientHeight;
resizefn();

var start=0,
	end=2*Math.PI,
	one=true,
	nowAngle=0;
var oWrap = document.getElementById('canvaswrap');

var oCanvas = document.getElementById('loading');

if(oCanvas.getContext){
	var ctx = oCanvas.getContext('2d');
}

setInterval(function(){
	drawCircle();
	computedNum();
	drawOverFlow();
},30);
addEvent(window,"load",removeWrap);
addEvent(window,"load",function(){
	var oLink = document.createElement("link");
	oLink.href="/stylesheet/css/indexAnimation.css";
	oLink.rel="stylesheet";
	oLink.type="text/css";
	document.head.appendChild(oLink);
});




function addEvent(obj,type,handle) {
	if(obj.addEventListener){
		obj.addEventListener(type,handle,true);
	}else if(obj.attachEvent){
		obj.attachEvent("on"+type,handle);
	}else{
		obj['on'+type]=handle
	}
}
function computedNum(){
	if(one){
		start=0;
		nowAngle += 0.025;
		end = Math.PI*(2-nowAngle);
	}else{
		end = 0;
		nowAngle += 0.025;
		start = Math.PI*(2-nowAngle);
	}

	nowAngle=Math.round(nowAngle*1000)/1000;
	if(nowAngle%2==0){
		one=!one;
	}
	if(nowAngle-4>0){
		nowAngle-=4;
	}			
}
function drawOverFlow () {
	ctx.fillStyle="#fff";
	ctx.beginPath();
	ctx.arc(60,60,50,0,Math.PI*2,false);
	ctx.closePath();
	ctx.fill();		
}
function drawCircle(){
	ctx.clearRect(0,0,120,120);
	ctx.fillStyle="rgb(41,171,226)";
	ctx.beginPath();
    ctx.moveTo(60, 60);  
	ctx.arc(60,60,60,start,end,false);
	ctx.closePath();
	ctx.fill();
}
function getStyle (obj,attr) {
	if(window.getComputedStyle){
		return window.getComputedStyle(obj,null)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}
function removeWrap(){
	var oHeight = oWrap.offsetHeight;
	var removeWrapTime = setInterval(function(){
		speed = parseFloat(getStyle(oWrap,'height'))/20;
		oWrap.style.height = parseFloat(getStyle(oWrap,'height')) - speed+"px";
		if(speed==0){
			clearInterval(removeWrapTime);
			oWrap.parentNode.removeChild(oWrap);
		}
	},30);
}


function resizefn(){
	document.body.style.height = bodyheight+"px";
}
function getStyle(obj,attr){
	if(window.getComputedStyle){
		return window.getComputedStyle(obj,null)[attr];
	}else{
		return obj.currentStyle[attr];
	}
}
function addEvent (obj,type,handle) {
	if(obj.addEventListener){
		obj.addEventListener(type,handle,true);
	}else{
		obj.attachEvent("on"+type,handle);
	}
}