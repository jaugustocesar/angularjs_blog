(function() {
    "use strict";
    describe("Angular JS Blog Application", function() {
        beforeEach(module("blogApp"));

        describe("BlogCtrl", function() {
            var scope, ctrl;

            beforeEach(
                inject(function($rootScope, $controller) {
                    scope = $rootScope.$new();
                    ctrl = $controller("BlogCtrl", { $scope: scope });
                })
            );

            it("should create show blog entry count", function() {
                expect(scope.blogList.length).toEqual(0);
            });
        });

        describe("BlogViewCtrl", function() {
            var scope, ctrl, $httpBackend;

            beforeEach(
                inject(function(
                    _$httpBackend_,
                    $routeParams,
                    $rootScope,
                    $controller
                ) {
                    $httpBackend = _$httpBackend_;
                    $httpBackend.expectGET("BlogPost").respond({ _id: "1" });
                    $routeParams.id = "1";
                    scope = $rootScope.$new();
                    ctrl = $controller("BlogViewCtrl", { $scope: scope });
                })
            );

            it("should show blog entry id", function() {
                expect(scope.blogEntry).toBeUndefined();
                // expect(scope.blogList).toBeUndefined();
                // expect(scope.blg).toEqual(1);
            });
        });

        describe("LoginCtrl", function() {
            var scope, ctrl;

            beforeEach(
                inject(function($rootScope, $controller) {
                    scope = $rootScope.$new();
                    ctrl = $controller("LoginCtrl", { $scope: scope });
                    scope.submit();
                })
            );

            it("should show submit success", function() {
                console.log("LoginCtlr: " + scope.sub);
                expect(scope.sub).toEqual(true);
                // expect(scope.blogList).toBeUndefined();
            });
        });

        describe("LogoutCtrl", function() {
            var scope, ctrl;

            beforeEach(
                inject(function($rootScope, $controller) {
                    scope = $rootScope.$new();
                    ctrl = $controller("LogoutCtrl", { $scope: scope });
                })
            );

            it("should create LogoutCtrl controller", function() {
                console.log("LogoutCtrl: " + ctrl);
                expect(ctrl).toBeDefined();
                // expect(scope.blogList).toBeUndefined();
            });
        });
    });
})();
