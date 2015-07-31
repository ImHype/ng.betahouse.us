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
				1:'<div><img src="/static/image/logo.png"></div>',
				2:'<div><img src="/static/image/hbb.jpg"></div>',
				3:'<div><img src="/static/image/hll.jpg"></div>',
				4:'<div><img src="/static/image/yjm.jpg"></div>',
				5:'<div><img src="/static/image/hly.jpg"></div>',
				6:'<div><img src="/static/image/llh.jpg"></div>',
				7:'<div><img src="/static/image/lyq.jpg"></div>',
				8:'<div><img src="/static/image/wt.jpg"></div>',
				9:'<div><img src="/static/image/xzy.jpg"></div>',
				10:'<div><img src="/static/image/yg.jpg"></div>'
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