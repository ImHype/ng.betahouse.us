betaApp.run(function($rootScope){
	var headcon = document.getElementById("headcon");
	var lis = headcon.getElementsByTagName('a');
	for (var i = 0; i < lis.length; i++) {
		lis[i].onclick=function(){
			this.className="active";
		}
	};
});
betaApp.factory("groupService",function($http){
	return {
		getJson:function(path){
			return $http({
				method:"get",
				url:"/models/"+path
			})
		}
	}
});

betaApp.controller("grouplogo",function($scope,$http,groupService){
	groupService.getJson("/tuandui.json").success(function(data){
		$scope.groups = data;
	})
	$scope.groupShow=function(arg){
		$scope.head = $scope.groups[arg]["groupName"];
		$scope.content = $scope.groups[arg]["content"];
		$scope.$emit("openOver");
	}
});
betaApp.controller("overController",function($element,$scope,$rootScope){
	$scope.closePanel=function(){
		$rootScope.isPanelShow = false;
	}
});

betaApp.controller("menbershow",function($element,$scope,groupService){
	groupService.getJson("menbers.json").success(function(data){
		$scope.menbers = data;
	})

	$scope.groupShow=function(arg){
		$scope.head = $scope.menbers[arg]["groupName"];
		$scope.content = $scope.menbers[arg]["content"];
		$scope.$emit("openOver");
	}
});

betaApp.controller("workshow",function($element,$scope,$rootScope){
	$scope.works=[{
		"name" : "β-house招新网",
		"picSrc" : "/image/join.betahouse.us.png",
		"content" : "链接:http://join.betahouse.us"
	},{
		"name" : "β-house官网",
		"picSrc" : "/image/betahouse.us.png",
		"content" : "链接:http://betahouse.us"
	},{
		"name" : "β妹",
		"picSrc" : "/image/betagirl.png",
		"content" : "betahouse吉祥物"
	},{
		"name" : "β-house学习网",
		"picSrc" : "/image/study.betahouse.us.png",
		"content" : "链接:http://betahouse.us'"
	}];

	$scope.isPanelShow = $rootScope.isPanelShow;
	var _this = $element[0];
	setTimeout(function(){
		var outer = _this.getElementsByClassName("outer");
		for (var i = 0; i < outer.length; i++) {
			outer[i].style.left=i%3*280+"px"
			outer[i].style.top=parseInt(i/3)*190+"px"
		};
	},0);
	$scope.showWork = function(arg,e){
		var e = e ? e : window.event;
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

betaApp.controller('history',["$element","$scope",function($element,$scope){
	$scope.events=[{
		"time":"2010.9.1",
		"content":"betahouse工作室成立"
	},{
		"time":"2012.5.25",
		"content":"betahouse工作室第一次被评为杭电新青年团队"
	},{
		"time":"2015.5.30",
		"content":"betahouse工作室第二次被评为杭电科技之星，星青年团队"
	}];
	$scope.eventContent = $scope.events[0]["content"];
	$scope.changeCon=function(arg){
		$scope.eventContent = $scope.events[arg]["content"];
	}
}])