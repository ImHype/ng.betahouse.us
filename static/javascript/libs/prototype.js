function gallery(){
	this.aBox = getByClass(document,"box");
}
gallery.prototype={
	conf:function(json){
		this.json = json;
		this.init();
	},
	init:function(){
		var _this = this;
		this.wrapper = oWrapper = document.getElementById("wrapper");
		this.oParent = this.wrapper;
		this.actArray = ['pre-active','now-active','next-active','over-active'];
		this.count = -2;
		for(var attr in this.json){

			this.digui(this.json[attr]);
		}
		this.active = this.getActive(this.aBox);
		var keydn =this.keydn;
		var changeActive = this.changeActive;
		addEvent(document,"keydown",function(e){
			keydn.call(_this);
		});
		addEvent(document.getElementById('prev'),'click',function(e){
			changeActive.call(_this,"prev");
		});
		addEvent(document.getElementById('next'),'click',function(e){
			changeActive.call(_this,"next");
		});
	},
	digui:function (obj){
		var oDiv = document.createElement('div');
		var _this = this;
		this.oParent.innerHTML += '<div class="box" index="'+this.count+'">'+obj+'</div>'
		var oDiv = getByClass(this.oParent,"box")[0];
		if(this.count>=0&&this.count<=3){
			oDiv.setAttribute('act',_this.actArray[_this.count]);
		}
		this.oParent = oDiv;
		this.count++;
	},
	setAct:function (){
		var aBox = this.aBox;
		var active =this.active;
		for(var i=0,len=this.aBox.length;i<len;i++){
			aBox[i].setAttribute("act","");
		}
			aBox[active].setAttribute("act","now-active");

		if(!aBox[active-1]){
			aBox[active].setAttribute("act","notpre-active");
		}else{
			aBox[active-1].setAttribute("act","pre-active");
		}
		if(aBox[active-2]){
			aBox[active-2].setAttribute("act","notpre-active");
		}
		if(aBox[active+1]){
			aBox[active+1].setAttribute("act","next-active");
		}
		if(aBox[active+2]){
			aBox[active+2].setAttribute("act","over-active");
		}
	},
	changeActive:function(type){
		var _this = this;

		switch (type){
			case "prev":
				if(_this.active>0){
					this.active--; 
				}else{
					this.active = _this.aBox.length-1;
				}
				break;
			case "next":
				if(_this.active<_this.aBox.length-1){
					this.active++;
				}else{
					this.active = 0;
				}
				break;
		}
		_this.setAct();
		this.wrapper.style.WebkitTransform="translateX("+(this.active)*(-172)+"px)";
		this.wrapper.style.MozTransform="translateX("+(this.active)*(-172)+"px)";
	},
	keydn:function(e){
		var _this = this;
		ev =e||event;
		switch(ev.keyCode){
			case 37:
				if(_this.active>0){
					this.active--; 
				}else{
					this.active = _this.aBox.length-1;
				}
				break;
			case 39:
				if(_this.active<_this.aBox.length-1){
					this.active++;
				}else{
					this.active = 0;
				}
				break;
		}
		_this.setAct();
		this.wrapper.style.WebkitTransform="translateX("+(this.active)*(-172)+"px)";
		this.wrapper.style.MozTransform="translateX("+(this.active)*(-172)+"px)";
	},
	getActive:function (obj){
		for (var i = 0; i < obj.length; i++) {
			if(/now-active/.test(obj[i].getAttribute('act'))){
				this.active = i;
				break;
			}
		};
		return this.active;
	}
}
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
