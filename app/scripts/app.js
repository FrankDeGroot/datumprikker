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
    }).when('/lala', {
        templateUrl: 'views/lala.html',
        controller: 'lalaCtrl'
    }).otherwise({
        redirectTo: '/'
    });
});
