'use strict';

angular.module('datumprikkerApp').controller('mainCtrl', function ($scope, contactsRsrc) {
    $scope.contacten = contactsRsrc.query(undefined, function () { }, function (error) {
        $scope.message = error;
    });
    $scope.newContact = {};
    $scope.saveContact = function () {
        $scope.contacten.push($scope.newContact);
        $scope.newContact = {};
        $scope.newContactForm.$setPristine();
    };
    $scope.deleteContact = function (contact) {
        var index = $scope.contacten.indexOf(contact);
        $scope.contacten.splice(index, 1);
    };
});
