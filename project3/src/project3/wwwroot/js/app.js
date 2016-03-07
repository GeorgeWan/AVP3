
var gitSearchApp = angular.module("gitSearchApp", ['ngRoute', 'gitSearchControllers', 'gitSearchServices']);


gitSearchApp.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'templates/search.html',
        controller: 'searchController'
    })
    .when('/user', {
        templateUrl: 'templates/user.html',
        controller: 'userController'
    })
    .when('/repository', {
        templateUrl: 'templates/repository.html',
        controller: 'repositoryController'
    });
})




