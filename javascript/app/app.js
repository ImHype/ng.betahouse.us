var betaApp = angular.module("beta",['ngRoute','ngAnimate']);
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
		template:'<div id="wrapper" menbershow></div>\
		<div id="menbersBtn">\
		<button id="prev">prev</button>\
		<button id="next">next</button>\
		</div>',
	}).when('/history',{
		templateUrl:"/view/history.html"
	}).when('/bbs',{
		templateUrl:"/view/bbs.html"
	})
}]);
