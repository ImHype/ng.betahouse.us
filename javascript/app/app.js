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
	}).when('/join',{
		template:"<h1>join</h1>"
	}).when('/bbs',{
		template:"<h1>bbs</h1>"
	})
}]);
