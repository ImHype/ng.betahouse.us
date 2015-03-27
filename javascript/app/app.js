var betaApp = angular.module("beta",['ngRoute']);
/*
	Config Route
	*/
betaApp.config(['$routeProvider',function ($routeProvider) {
	$routeProvider.when("/",{
		templateUrl:"/view/index.html"
	}).when('/group',{
		templateUrl:"/view/group.html"
	}).when('/work',{
		templateUrl:"/view/work.html"
	}).when('/menbers',{
		template:'<div id="menbershow" ng-controller="menbershow"><div id="wrapper" grouplogo></div></div>',
		controller:"menberinit"
	}).when('/history',{
		templateUrl:"/view/history.html"
	}).when('/bbs',{
		templateUrl:"/view/bbs.html"
		
	})
}]);
