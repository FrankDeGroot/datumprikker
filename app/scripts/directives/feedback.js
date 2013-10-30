'use strict';

angular.module('datumprikkerApp').directive('feedback', function () {
    return {
        restrict: 'E',
        templateUrl: 'views/directives/feedback.html',
        scope: { debug: '@' },
        controller: function ($scope, $element, $attrs, $transclude, $location) {
            $scope.debugMode = $scope.debug !== undefined;
            $scope.visible = false;
            $scope.toggle = function () {
                $scope.visible = !$scope.visible;
            };
            $scope.submit = function () {
                if ($scope.debug !== undefined) {
                    alert('You provided feedback: \'' + $scope.text + '\' ' + ' on location: ' + $location.path() + '.');
                }
            };
        },
    };
});