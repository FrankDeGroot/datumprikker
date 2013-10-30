'use strict';

describe('Controller: MainCtrl', function () {
    var $controller, $httpBackend, $scope;

    beforeEach(function () {
        module('datumprikkerApp');
        inject(function (_$controller_, _$httpBackend_, _$rootScope_) {
            $controller = _$controller_;
            $httpBackend = _$httpBackend_;
            $scope = _$rootScope_.$new();
        })
    });

    it('should show a list of retrieved contacts', function () {
        var contacten = [{}, {}, {}];
        $httpBackend.expectGET('contacts.json').respond(contacten);
        $controller('mainCtrl', {
            $scope: $scope
        });
        expect($scope.contacten).toEqualJson([]);
        $httpBackend.flush();
        expect($scope.contacten).toEqualJson(contacten);
    });

    it('should show a message on a server error', function () {
        $httpBackend.expectGET('contacts.json').respond(404, 'Not found');
        $controller('mainCtrl', {
            $scope: $scope
        });
        $httpBackend.flush();
        expect($scope.contacten).toEqualJson([]);
        expect($scope.message.data).toEqual('Not found');
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });
});
