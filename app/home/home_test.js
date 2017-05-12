'use strict';

describe('blogApp.home module', function () {

    beforeEach(module('blogApp.home'));

    describe('HomeCtrl', function () {

        var scope, homeCtrl;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            homeCtrl = $controller('HomeCtrl', {$scope: scope});
        }));

        it('should create show blog entry count', function () {
            console.log("blogList: " + scope.blogList.length);
            expect(scope.blogList.length).toEqual(2);
        });

    });
});