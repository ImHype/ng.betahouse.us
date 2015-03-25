betaApp.run(function($rootScope){
	$rootScope.isPanelShow = false;
	$rootScope.closeDialog = function(e){
		var e =e || event;
		switch(e.keyCode){
			case 27: 
				$rootScope.isPanelShow = false;
				break
		}
	};
	$rootScope.clickfn=function(e){
		var e = e||event;
		$rootScope.isPanelShow = false;
	}
});
betaApp.controller("grouplogo",function($scope){

});
betaApp.controller("overController",function($element,$scope,$rootScope){
	$scope.closePanel=function(){
		$rootScope.isPanelShow = false;
	}
});
betaApp.controller("workshow",function($element,$scope,$rootScope){
	$scope.works=[{
		"index" : 0,
		"name" : "β-house招新网",
		"picSrc" : "/image/join.betahouse.us.png",
		"content" : "betahouse招新网"
	},{
		"index" : 0,
		"name" : "β-house招新网",
		"picSrc" : "/image/join.betahouse.us.png",
		"content" : "betahouse招新网"
	},{
		"index" : 0,
		"name" : "β-house招新网",
		"picSrc" : "/image/join.betahouse.us.png",
		"content" : "betahouse招新网"
	},{
		"index" : 0,
		"name" : "β-house招新网",
		"picSrc" : "/image/join.betahouse.us.png",
		"content" : "betahouse招新网"
	},{
		"index" : 0,
		"name" : "β-house招新网",
		"picSrc" : "/image/join.betahouse.us.png",
		"content" : "betahouse招新网"
	}];

	$scope.isPanelShow = $rootScope.isPanelShow;
	var _this = $element[0];
	setTimeout(function(){
		var outer = getByClass(_this,"outer");
		for (var i = 0; i < outer.length; i++) {
			outer[i].style.left=i%3*280+"px"
			outer[i].style.top=parseInt(i/3)*190+"px"
		};
	},0)
	$scope.showWork = function(arg,e){
		var e = e||event;
		$rootScope.isPanelShow=true;
		$rootScope.conhead = $scope.works[arg].name;
		$rootScope.content = $scope.works[arg].content;
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble=true;
		}
	}
});
betaApp.directive('over',function(){
	return {
		restrict:"EACM",
		templateUrl:'/template/over.html',
		controller:function(){

		},
		link:function($scope, elem, attrs,$rootScope){

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
				oDiv.style.width="250px";
				oDiv.style.height="28px";
				oDiv.style['background-position']="0 "+"-"+i*28+"px";
				oDiv.style.top=i*28+"px";
				oDiv.style['-webkit-animation-delay']= (20-i)*50+"ms";
				elem.append(oDiv);
			}
		}
	}
})