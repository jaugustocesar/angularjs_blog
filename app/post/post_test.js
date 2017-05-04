'use strict';

describe('blogApp.post module', function () {

    beforeEach(module('blogApp.post'));

    describe('PostCtrl', function () {

        var scope, postCtrl;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            postCtrl = $controller('PostCtrl', {$scope: scope});
        }));

        it('should ....', inject(function () {
            expect(postCtrl).toBeDefined();
        }));

    });
});