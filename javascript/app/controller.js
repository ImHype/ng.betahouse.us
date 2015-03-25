betaApp.run(function($rootScope){
	$rootScope.isPanelShow = false;
});
betaApp.controller("grouplogo",function($scope){

});
betaApp.controller("overController",function($element,$scope,$rootScope){
	$scope.isPanelShow = $rootScope.isPanelShow;
	$scope.closePanel=function(){
		$scope.isPanelShow = false;
	}
});
betaApp.controller("workshow",function($element,$scope,$rootScope){
	$scope.works=[{
		"index" : 0,
		"name" : "β-house招新网",
		"picSrc" : "/image/join.betahouse.us.png",
		"content" : "betahouse招新网"
	}];
	$scope.isPanelShow = $rootScope.isPanelShow;
	$scope.showWork = function(arg){
		$scope.isPanelShow=true;
	}
});
betaApp.directive('over',function(){
	return {
		restrict:"EACM",
		templateUrl:'/template/over.html',
		controller:function(){

		},
		link:function(scope, elem, attrs){
			// oClose.
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