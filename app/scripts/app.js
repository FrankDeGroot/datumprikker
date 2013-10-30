'use strict';

angular.module('datumprikkerApp', [
    'ngRoute',
    'ngResource',
]).config(function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
    }).when('/invite', {
        templateUrl: 'views/invite.html',
        controller: 'inviteCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});
