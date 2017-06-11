(function() {
    "use strict";
    var blogApp = angular.module("blogApp", [
        "ngRoute",
        "myApp.version",
        "blogControllers",
        "blogServices",
        "blogBusinessServices",
        "blogDirectives"
    ]);

    blogApp.config([
        "$locationProvider",
        "$routeProvider",
        function($locationProvider, $routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "../partials/main.html",
                    controller: "BlogCtrl"
                })
                .when("/blogPost/:id", {
                    templateUrl: "../partials/blogPost.html",
                    controller: "BlogViewCtrl"
                })
                .when("/login", {
                    templateUrl: "partials/login.html",
                    controller: "LoginCtrl"
                })
                .when("/logout", {
                    templateUrl: "partials/login.html",
                    controller: "LogoutCtrl"
                });

            $locationProvider.html5Mode(false).hashPrefix("!");
        }
    ]);
})();
