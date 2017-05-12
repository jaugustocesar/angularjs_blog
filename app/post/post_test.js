'use strict';

describe('blogApp.post module', function () {

    beforeEach(module('blogApp.post'));

    describe('PostCtrl', function () {

        var scope, postCtrl, $httpBackend;

        beforeEach(inject(function (_$httpBackend_,
                                    $routeParams, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('blogPost').respond({_id: '1'});

            $routeParams.id = '1';

            scope = $rootScope.$new();

            postCtrl = $controller('PostCtrl', {$scope: scope});
        }));

        it('should show blog entry id', function () {
            expect(scope.blogEntry._id).toEqual(1);
        });

    });
});