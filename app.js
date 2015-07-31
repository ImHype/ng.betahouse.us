var betaApp = angular.module("beta",['ngRoute','ngAnimate']);
/*
Config Route
*/
betaApp.config(['$routeProvider',function ($routeProvider) {
	$routeProvider.when("/",{
		templateUrl:"views/index.html"
	}).when('/group',{
		templateUrl:"views/group.html"
	}).when('/work',{
		templateUrl:"views/work.html"
	}).when('/menbers',{
		template:'<div id="wrapper" menbershow></div>\
		<div id="menbersBtn">\
		<button id="prev">prev</button>\
		<button id="next">next</button>\
		</div>',
	}).when('/history',{
		templateUrl:"views/history.html"
	}).when('/bbs',{
		templateUrl:"views/bbs.html"
	})
}]);
