
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
betaApp.controller("grouplogo",function($scope,$rootScope){
	$scope.groups=[{
		"id":"qd",
		"groupName":"前端部",
		"content":"前端"
	},{
		"id":"ht",
		"groupName":"后台部",
		"content":"前端"

	},{
		"id":"fwq",
		"groupName":"服务器",
		"content":"前端"

	},{
		"id":"yy",
		"groupName":"设计",
		"content":"前端"

	}];
	$scope.groupShow=function(arg,e){
		$rootScope.isPanelShow=true;
		$rootScope.conhead=$scope.groups[arg]["groupName"];
		$rootScope.content=$scope.groups[arg]["content"];
		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble=true;
		}
	}
});
betaApp.controller("overController",function($element,$scope,$rootScope){
	$scope.closePanel=function(){
		$rootScope.isPanelShow = false;
	}
});
betaApp.controller("menberinit",function(){
	new gallery().conf({
		1:'<div><img src="/image/1.jpg"></div>',
		2:'<div><img src="/image/2.jpg"></div>',
		3:'<div><img src="/image/3.jpg"></div>',
		4:'<div><img src="/image/4.jpg"></div>',
		5:'<div><img src="/image/1.jpg"></div>',
		6:'<div><img src="/image/2.jpg"></div>'
	});
})
betaApp.controller("menbershow",function($element,$scope,$rootScope){
	
	$scope.menbers = [
	{"name":"许骏宇",
	"content":"开心快乐"
	},{"name":"许骏宇",
	"content":"开心快乐"
	},{"name":"许骏宇",
	"content":"开心快乐"
	},{"name":"许骏宇",
	"content":"开心快乐"
	},{"name":"许骏宇",
	"content":"开心快乐"
	},{"name":"许骏宇",
	"content":"开心快乐"
	}];
	$scope.aaaa="aaa";
	var oBox = getByClass($element[0],"box");
	for (var i = 0; i < oBox.length; i++) {
		oBox[i].index = i;
		oBox[i].onclick=function(e){
			var n = this.index;
			$rootScope.isPanelShow=true;
			$rootScope.conhead = $scope.menbers[n].name;
			$rootScope.content = $scope.menbers[n].content;
			var e = e||event;
			if(e.stopPropagation){
				e.stopPropagation();
			}else{
				e.cancelBubble=true;
			}
		}
	};
});

betaApp.controller("workshow",function($element,$scope,$rootScope){
	$scope.works=[{
		"name" : "β-house招新网",
		"picSrc" : "/image/join.betahouse.us.png",
		"content" : "betahouse招新网"
	},{
		"name" : "β-house招新网",
		"picSrc" : "/image/join.betahouse.us.png",
		"content" : "betahouse招新网"
	},{
		"name" : "β-house招新网",
		"picSrc" : "/image/join.betahouse.us.png",
		"content" : "betahouse招新网"
	},{
		"name" : "β-house招新网",
		"picSrc" : "/image/join.betahouse.us.png",
		"content" : "betahouse招新网"
	},{
		"name" : "β-house招新网",
		"picSrc" : "/image/join.betahouse.us.png",
		"content" : "it is so good"
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

betaApp.controller('history',["$element","$scope",function($element,$scope){
	$scope.events=[{
		"time":"2010.9.1",
		"content":"betahouse工作室成立"
	},{
		"time":"2010.9.1",
		"content":"betahouse工作室成立1"
	},{
		"time":"2010.9.1",
		"content":"betahouse工作室成立2"
	}];
	$scope.eventContent = $scope.events[0]["content"];
	$scope.changeCon=function(arg){
		$scope.eventContent = $scope.events[arg]["content"];
	}

}])