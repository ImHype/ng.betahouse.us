
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
		"content":"喜欢代码，无需设计，愿意投入一定的时间和精力去学习。"
	},{
		"id":"ht",
		"groupName":"后台部",
		"content":"php后台的使用"

	},{
		"id":"fwq",
		"groupName":"服务器",
		"content":"有一定的了解，并愿意花时间和精力去学习更多。"

	},{
		"id":"yy",
		"groupName":"设计",
		"content":"对网站的设计有一定的想法，并且愿意去学习photoshop等工具"

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
		1:'<div><img src="/image/logo.png"></div>',
		2:'<div><img src="/image/hbb.jpg"></div>',
		3:'<div><img src="/image/hll.jpg"></div>',
		4:'<div><img src="/image/hly.jpg"></div>',
		5:'<div><img src="/image/llh.jpg"></div>',
		6:'<div><img src="/image/lyq.jpg"></div>',
		7:'<div><img src="/image/wt.jpg"></div>',
		8:'<div><img src="/image/xzy.jpg"></div>',
		9:'<div><img src="/image/yg.jpg"></div>'
	});
})
betaApp.controller("menbershow",function($element,$scope,$rootScope){
	
	$scope.menbers = [
	{"name":"β-house",
	"content":"莎士比亚说过，这是一个有逼格的工作室"
	},{"name":"黄炳炳",
	"content":"Talk is cheap ,I will show the code."
	},{"name":"黄琳琅",
	"content":"简简单单，好好生活，好好爱自己。努力成为想要成为的人"
	},{"name":"黄丽雅",
	"content":"我想用长得不一样的脑子来讲我对世界的认知，任何一种表达任何一种语言都是为了能与你一起玩耍，这次我们用代码好不好=皿="
	},{"name":"李璐慧",
	"content":"热爱前端，更热爱代码。认真生活，诚意待事，真心喜欢有趣的朋友。Write the Code. Change the World"
	},{"name":"李玉强",
	"content":"爱美剧，爱音乐；爱β-house，爱生活。希望成为一个能够游遍全世界的技术宅。"
	},{
		"name":"王涛",
		"content":"习惯有计划的生活，反感浪费时间的事，热爱前端的所有技术，喜欢收集各种前端特效，看其中的代码，希望能学以致用。热爱β-house，希望在这里能让自己变成强者。未来我希望能创办自己的网站（如淘宝，新浪...）"
	},{
		"name":"夏之韵",
		"content":"热爱祖国、热爱betahouse、热爱音乐前端旅游……喜欢什么就做什么。It's me！"
	},{
		"name":"余刚",
		"content":"18岁的我，对任何事都有好奇心，坚信着EvErYthing Will bE Ok ！"
	}];

	var oBox = getByClass($element[0],"box");
	for (var i = 0; i < oBox.length; i++) {
		oBox[i].index = i;
		oBox[i].onclick=function(e){
			var n = this.index;
			$scope.$apply(function(scope) {
			   	$rootScope.isPanelShow=true;
			   	$rootScope.conhead = $scope.menbers[n].name;
				$rootScope.content = $scope.menbers[n].content;
			});
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