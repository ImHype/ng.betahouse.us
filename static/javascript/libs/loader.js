var start=0,
end=2*Math.PI,
one=true,
nowAngle=0;
var imgList = ["b.png",
	"hbb.jpg",
	"hll.jpg",
	"hly.jpg",
	"join.betahouse.us.png",
	"llh.jpg",
	"logo.png",
	"lyq.jpg",
	"pbj.jpg",
	"study.betahouse.us.png",
	"wbq.jpg",
	"wt.jpg",
	"xjy.jpg",
	"xzy.jpg",
	"yg.jpg",
	"yjm.jpg",
	"zcl.jpg"
	];
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

var i=0;


window.onload = function(){
	oCanvas.onclick=function(){
		alert(0)
	}
	removeWrap();
	do{
		loadImage(imgList[i]);	
		i++;
	}while(i<imgList.length);
};

function computedNum (){
	
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
function loadImage(src){
	var img = new Image();
	img.src="/static/image/"+src;
}
function removeWrap(){

	var oHeight = oWrap.offsetHeight;
	var oWrapH ; 
	var speed ;
	var removeWrapTime = setInterval(function(){
		oWrapH= parseFloat(getCss(oWrap,'height'))
		speed = oWrapH/20;
		oWrap.style.height = oWrapH - speed+"px";
		if(speed==0){
			clearInterval(removeWrapTime);
			oWrap.parentNode.removeChild(oWrap);
		}
	},30);
}
function getCss(obj,name){
	if(window.getComputedStyle){
		return window.getComputedStyle(obj,false)[name];
	}else{
		return obj.currentStyle[name]
	}
}

/*** nav active ***/

var nav = getByClass(document,"nav")[0];
var navLi = nav.getElementsByTagName('li');

var navA = [];
var i =0;
do {
	if(navLi[i].parentNode == nav){
		navA.push(navLi[i].getElementsByTagName('a')[0]);	
	}
	i++
}while(i<navLi.length);
console.log(navA)

i=0;
do{
	addEvent(navA[i],"click",function(e){
		i=0;
		do {
			navA[i].className = "";
			i++;
		}while(i<navA.length);

		var ev =  e || event;
		ev.target.className = "active";
	})
	i++;
} while(i<navA.length);



function getByClass (parent,sclass) {
	if(parent.getElementsByClassName){
		return parent.getElementsByClassName(sclass);
	}else if(parent.querySelector){
		return parent.querySelector("."+sclass);
	}
	else {
		var results = [];
		var aEle = parent.getElementsByTagName('*');
		for (var i = 0; i < aEle.length; i++) {
			if(new RegExp("\s|$"+aEle+"\s|^").test(aEle[i].className)){
				results.push(aEle[i]);
			}
		};
		return results;
	}
}

function addEvent (obj,type,handle) {
	if(obj.addEventListener){
		obj.addEventListener(type,handle,true);
	}else{
		obj.attachEvent("on"+type,handle);
	}
}
