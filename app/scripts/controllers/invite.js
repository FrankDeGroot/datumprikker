'use strict';

angular.module('datumprikkerApp').controller('inviteCtrl', function ($scope, contactsRsrc) {
    $scope.invitees = contactsRsrc.query(undefined, function () { }, function (error) {
        $scope.message = error;
    });
    $scope.participants = 0;
    $scope.selectInvitee = function () {
        $scope.participants = 0;
        for (var i = 0; i < $scope.invitees.length; i++) {
            if ($scope.invitees[i].checked === true) {
                $scope.participants++;
            }
        }
    };
});