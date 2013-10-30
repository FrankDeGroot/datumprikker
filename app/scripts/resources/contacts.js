'use strict';

angular.module('datumprikkerApp').factory('contactsRsrc', function ($resource) {
    return $resource('contacts.json');
});