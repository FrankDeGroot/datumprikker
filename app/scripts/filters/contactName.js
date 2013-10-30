'use strict';

angular.module('datumprikkerApp').filter('contactName', function () {
    return function (contact) {
        return contact.voornaam + ' ' + contact.achternaam;
    };
});