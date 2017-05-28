'use strict';

var blogApp = angular.module('blogApp', [
    'ngRoute',
    'blogControllers',
    'blogServices',
    'myApp.version'
]);

blogApp.config(['$locationProvider', '$routeProvider',
    function ($locationProvider, $routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: '../partials/main.html',
                controller: 'BlogCtrl'
            }).when('/blogPost/:id', {
                templateUrl: '../partials/blogPost.html',
                controller: 'BlogViewCtrl',
            });

    $locationProvider.html5Mode(false).hashPrefix('!');
}]);
