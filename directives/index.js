betaApp.directive('myOver',function(){
	return {
		restrict:"EACM",
		replace:true,
		transclude:true,
		template:'<div>\
		<div ng-transclude></div>\
			<div ng-show="isPanelShow" ng-keydown="closeDialog()">\
				<div id="overflow" ng-click="closeDialog()"></div>\
				<div id="content">\
					<h2>{{ conhead }}</h2>\
					<p id="con">\
						{{ content }}\
					</p>\
					<span id="closebtn" ng-click="closeDialog()"></span>\
				</div>\
			</div>\
		</div>',
		controller:function($scope){
			$scope.isPanelShow = false;
			$scope.closeDialog = function(e){
				$scope.isPanelShow=false;
			};
			$scope.$on("openOver",function(evt,showConfig){
				$scope.isPanelShow=true;
				$scope.conhead=evt.targetScope.head;
				$scope.content=evt.targetScope.content;
			});
			$scope.$on("closeDialog",function(){
				$scope.isPanelShow=false;
			})
		},
		link:function(scope, $elem, attrs){
			

			angular.element(document).bind("keydown",function(evt){
				if(evt.which==27){
					scope.$apply(function(){
						scope.isPanelShow=false;
					})
				}
			})
		}
	}
});
betaApp.directive('grouplogo',function(){
	return {
		restrict:"EACM",
		controller:function($scope,$element,$attrs,$transclude){
		},
		link:function(scope, elem, attrs){
			for(var i = 19;i>=0;i--){
				var oDiv = document.createElement("div");
				angular.element(oDiv).css({
					width:"250px",
					height:"28px",
					"background-position":"0 "+"-"+i*28+"px",
					top:i*28+"px",
					"-webkit-animation-delay":(20-i)*50+"ms"
				});
				elem.append(oDiv);
			}
		}
	}
});
betaApp.directive("myLoader",function(){
	return {
		restrict:"A",
		template:'<canvas id="loading" width="120" height="120">\
			您的浏览器不支持canvas\
		</canvas>\
		<h2>Loading...</h2>',
		controller:function($scope){
		},
		link:function(scope,element,attrs){
			var start=0,
			end=2*Math.PI,
			one=true,
			nowAngle=0;
			var imgList = ["b.png",
				"ganzi.png",
				"hbb.jpg",
				"hll.jpg",
				"hly.jpg",
				"join.betahouse.us.png",
				"llh.jpg",
				"logo.jpg",
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
			var oWrap = element;
			var oCanvas = element.find("canvas")[0];
			if(oCanvas.getContext){
				var ctx = oCanvas.getContext('2d');
			}
			setInterval(function(){
				drawCircle();
				computedNum();
				drawOverFlow();
			},30);

			var i=0;
			do{
				loadImage(imgList[i]);	
				i++;
			}while(i<imgList.length);

			angular.element(window).bind("load",function(){
				removeWrap();
			});

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

				var oHeight = oWrap[0].offsetHeight;
				var oWrapH ; 
				var speed ;
				var removeWrapTime = setInterval(function(){
					oWrapH= parseFloat(getCss(oWrap[0],'height'))
					speed = oWrapH/20;
					oWrap.css('height',oWrapH - speed+"px");
					if(speed==0){
						clearInterval(removeWrapTime);
						oWrap.remove();
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
		}
	}
});

betaApp.directive("menbershow",function(){
	return{
		restrict:"A",
		template:'',
		controller:function($element,$scope,groupService){
			groupService.getJson("menbers.json").success(function(data){
				$scope.menbers = data;
			})

			$scope.groupShow=function(arg){
				$scope.head = $scope.menbers[arg]["name"];
				$scope.content = $scope.menbers[arg]["content"];
				$scope.$emit("openOver");
			}
		},
		link:function(scope,element,attrs){
			console.log(scope.groupShow)
			new gallery().conf({
				1:'<div><img src="/image/logo.png"></div>',
				2:'<div><img src="/image/hbb.jpg"></div>',
				3:'<div><img src="/image/hll.jpg"></div>',
				4:'<div><img src="/image/yjm.jpg"></div>',
				5:'<div><img src="/image/hly.jpg"></div>',
				6:'<div><img src="/image/llh.jpg"></div>',
				7:'<div><img src="/image/lyq.jpg"></div>',
				8:'<div><img src="/image/wt.jpg"></div>',
				9:'<div><img src="/image/xzy.jpg"></div>',
				10:'<div><img src="/image/yg.jpg"></div>'
			});
			var oBox = angular.element(getByClass(document.getElementById('wrapper'),"box"));
			for (var i = 0; i < oBox.length; i++) {
				oBox[i].index = i;
				angular.element(oBox[i]).bind("click",function(ev){
					var n = this.index;
					scope.groupShow(n);
					scope.$apply();
					var e = event||ev;
					if(e.stopstopPropagation){
						e.stopPropagation();
					}else{
						 window.event.cancelBubble = true;
					}
				});
			};
		}
	}
});