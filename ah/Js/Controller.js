var AnimationCtrls = angular.module('AnimationCtrls',[]);

AnimationCtrls.controller('wdivCtrl',['$scope', function ($scope) {
    $scope.pageClass = "Mwdiv"
}]);

AnimationCtrls.controller('questionCtrl',['$scope', function ($scope) {
    $scope.pageClass = "question"
}]);

AnimationCtrls.controller('MyselfCtrl',['$scope', function ($scope) {
    $scope.pageClass = "Myself"
}]);