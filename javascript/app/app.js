var betaApp = angular.module("beta",['ngRoute']);
/*
	Config Route
	*/
betaApp.config(['$routeProvider',function ($routeProvider) {
	$routeProvider.when("/",{
		templateUrl:"/view/index.html",
	}).when('/group',{
		templateUrl:"/view/group.html"
	}).when('/work',{
		template:"<h1>work</h1>"
	}).when('/join',{
		template:"<h1>join</h1>"
	}).when('/bbs',{
		template:"<h1>bbs</h1>"
	})
}]);
