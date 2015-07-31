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
	groupService.getJson("tuandui.json").success(function(data){
		$scope.groups = data;
		$scope.groupShow=function(arg){
			$scope.head = $scope.groups[arg]["groupName"];
			$scope.content = $scope.groups[arg]["content"];
			$scope.$emit("openOver");
		}
	});
});
betaApp.controller("overController",function($element,$scope,$rootScope){
	$scope.closePanel=function(){
		$rootScope.isPanelShow = false;
	}
});

betaApp.controller("menbershow",function($element,$scope,groupService){
	groupService.getJson("menbers.json").success(function(data){
		$scope.menbers = data;
		$scope.groupShow=function(arg){
			$scope.head = $scope.menbers[arg]["groupName"];
			$scope.content = $scope.menbers[arg]["content"];
			$scope.$emit("openOver");
		}
	});
});

betaApp.controller("workshow",function($element,$scope,$rootScope,groupService,$timeout){
	var _this = $element[0];
	groupService.getJson("work.json").success(function(data){
		$scope.works = data;
		$scope.isPanelShow = $rootScope.isPanelShow;
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

	
});

betaApp.controller('history',["$element","$scope",function($element,$scope){
	$scope.events=[{
		"time":"2010.9.1",
		"content":"betahouse工作室成立,最初由6名成员构成，分别是朱力，何工，陈昌迪，孙玢，陶靖，谢嘉骏学长们。"
	},{
		"time":"2014.3~2014.5",
		"content":"betahouse工作室举行第一次校内web培训，并开展招新活动。"
	},{
		"time":"2015.5.30",
		"content":"betahouse工作室被评为杭电科技之星，星青年团队，得到了学校里的肯定。"
	}];
	$scope.eventContent = $scope.events[0]["content"];
	$scope.changeCon=function(arg){
		$scope.eventContent = $scope.events[arg]["content"];
	}
}])