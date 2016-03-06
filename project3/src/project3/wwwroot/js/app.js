var myApp = angular.module("myApp", ['ngRoute']);


myApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'pages/first.html',
        controller: 'firstController'
        })
    .when('/second', {
        templateUrl: 'pages/second.html',
        controller: 'secondController'
    })
})


myApp.controller("mainController", ["$scope", "$log",function ($scope, $log) {
    $scope.name = 'Family';
   
}]);

myApp.controller("firstController", ["$scope", "$log", function ($scope, $log) {
    $scope.name = 'George';
}]);


myApp.controller("secondController", ["$scope", "$log", function ($scope, $log) {
    $scope.name = 'Rachel';
}]);
