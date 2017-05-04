'use strict';

describe('AngularJS Blog Application', function () {

    beforeEach(module('blogApp.home'));

    describe('HomeCtrl', function () {

        var scope, homeCtrl;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            homeCtrl = $controller('HomeCtrl', {$scope: scope});
        }));

        it('should create show blog entry count', function () {
            expect(homeCtrl).toBeDefined();
        });

    });
});