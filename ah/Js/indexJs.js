var MyApp = angular.module('MyApp',['ui.router','ngAnimate','AnimationCtrls','chieffancypants.loadingBar']);

//页面路由
MyApp.config(function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index', {
            url: '/index',
            views: {
                '': {
                    templateUrl: 'tpls/index.html'
                },
                'main@index': {
                    templateUrl: 'tpls/wdiv.html',
                    controller:'wdivCtrl'
                },
                'foot@index': {
                    templateUrl: 'tpls/foot.html'
                }
            }
        })
        .state('search',{
            url:'/search',
            views:{
                '':{
                    templateUrl:'tpls/search.html'
                }
            }
        })
        .state('index.question',{
            url:'/question',
            views:{
                'main@index':{
                    controller:'questionCtrl',
                    templateUrl:'tpls/question.html'
                }
            }

        })
        .state('index.Myself',{
            url:'/Myself',
            views:{
                'main@index':{
                    templateUrl:'tpls/Myself.html',
                    controller:'MyselfCtrl'
                }
            }
        })
        .state('index.Allquestion',{
            url:'/Allquestion',
            views:{
                'main@index':{
                    templateUrl:'tpls/Allquestion.html'
                }
            }
        })
});

//首页加载数据
MyApp.controller('LoadDateCtrl',['$scope','$http', function ($scope, $http) {
    var config = {
        url: 'text.json',
        method: 'get'
    };
    $http(config).success(function(data){
        $scope.users = data;
        console.log("success");
    })
        .error(function (data) {
            console.log("error");
        });

    $scope.loadMore = function () {
        var config1 = {
            url:'text1.json',
            method:'get'
        };
        $http(config1).success(function (data) {
            for(var i=0;i<data.length;i++){
                $scope.users.push(data[i]);
            }
        })
            .error(function () {
                console.log("error1");
            })
    };
}]);

//点击问题跳转到单独界面时携带数据
var string0 ="";
var string1 ="";

MyApp.directive('goAll', function () {
    return{
        link: function (scope,element) {
            element.bind('click', function () {
                string0 ="";
                string1 ="";
                string0 = element.find('div')[0].innerText;
                string1 = element.find('div')[1].innerText;
                window.location.href = window.location+"/Allquestion";
            })
        }
    }
});
MyApp.controller('AllqtCtrl',['$scope', function ($scope) {
    $scope.str1 = string1;
    $scope.str0 = string0;
}]);
//div输入框
MyApp.directive('Contenteditable', function () {
    return{
        requier:'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            elm.bind('keyup', function () {
                scope.$apply(function () {
                    ctrl.$setViewValue(elm.text());
                })
            });
            ctrl.$renter = function () {
                elm.html(ctrl.$viewValue);
            };
            ctrl.$setViewValue(elm.html());
        }
    }
});

MyApp.directive('Contenteditable1', function () {
    return{
        requier:'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            elm.bind('keyup', function () {
                scope.$apply(function () {
                    ctrl.$setViewValue(elm.text());
                })
            });
            ctrl.$renter = function () {
                elm.html(ctrl.$viewValue);
            };
            ctrl.$setViewValue(elm.html());
        }
    }
});

//发送问题按钮
MyApp.directive("btn", ['$http',function ($http) {
    return{
        require:'^?Contenteditalbe',
        scope:{
        },
        restrict:'AE',
        transclude:'true',
        template:'<button class="GoBtn"><div ng-transclude="true"></div></button>',
        link: function (scope, elm) {
            elm.bind('click', function () {
                var tid = $("#title");
                var cid= $("#content");
                var t = tid.html();
                var c = cid.html();
                if(t.length>14){
                    alert("关键字过长");
                    tid.html("");
                    tid.focus();
                }
                else if(c.length<20){
                    alert("请将问题描述的清楚一些");
                    cid.focus();
                }
                else {
                    var config3 = {
                        url:'text1.json',
                        method:'post',
                        data:{}
                    };
                    $http(config3).success(function (data) {
                        alert("success");
                    })
                        .error(function () {
                            alert("error");
                            console.log("error1");
                        })
                }
            })
        }
    }
}]);

//加载我的回答，已回答和未回答

MyApp.controller('LoadMydataCtrl',['$scope','$http', function ($scope, $http) {
    var config2 = {
        url: 'text.json',
        method: 'get'
    };
    $http(config2).success(function(data){
        $scope.myqts = data;
        console.log("success");
    })
        .error(function (data) {
            console.log("error");
        });
    $scope.LoadMyyiquestion = function () {
        var config2 = {
            url:'text1.json',
            method:'get'
        };
        $http(config2).success(function (data) {
            $scope.myqts = data;
            //alert(data.length)
            //$scope.users.push(data);
        })
            .error(function () {
                console.log("error1");
            })
    };
    $scope.LoadMyweiquestion = function () {
        var config3 = {
            url:'text.json',
            method:'get'
        };
        $http(config3).success(function (data) {
            $scope.myqts = data;
            //alert(data.length)
            //$scope.users.push(data);
        })
            .error(function () {
                console.log("error1");
            })
    }
}]);

//我的回答左按钮

MyApp.directive("btnLeft", function () {
    return{
        scope:{},
        restrict:'AE',
        transclude:'true',
        template:'<div class="btnLeft"><div ng-transclude="true"></div></div>',
        controller: function ($scope,$http) {
            $scope.changeClass = function () {
                $("#btnLeft").addClass('text div ');
                $("#btnRight").removeClass('text div ');
                $("#scrid").removeClass('scrRant');
                $("#scrid").addClass('scrLant');
            }

            $scope.LoadMydata = function () {
                var config2 = {
                    url:'text1.json',
                    method:'get'
                };
                $http(config2).success(function (data) {
                    $scope.myqts=data;
                })
                    .error(function () {
                        console.log("error1");
                    })
            }
        },
        link: function (scope, element) {
            element.bind("click", function () {
                scope.changeClass();
                scope.LoadMydata();
            })
        }
    }
});

//我的回答右按钮

MyApp.directive("btnRight", function () {
    return{
        scope:{},
        restrict:'AE',
        transclude:'true',
        controller: function ($scope) {
            $scope.changeClass = function () {
                $("#btnRight").addClass('text div p');
                $("#btnLeft").removeClass('text div p');
                $("#scrid").removeClass('scrLant');
                $("#scrid").addClass('scrRant');
            }
        },
        template:'<div class="btnRight"><div ng-transclude="true"></div></div>',
        link: function (scope, element, attrs) {
            element.bind("click", function () {
                scope.changeClass();
            })
        }
    }
});

//搜索控制器
MyApp.controller('SearchCtrl',['$scope','$http', function ($scope, $http) {
    $scope.SearchLoad = function () {
        var config2 = {
            url: 'text.json',
            method: 'post',
            data:{}
        };
        $http(config2).success(function(data){
            $scope.mysearch = data;
            console.log("success");
        })
            .error(function (data) {
                console.log("error");
            });
    }
}])
