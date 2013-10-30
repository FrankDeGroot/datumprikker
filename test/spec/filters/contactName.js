'use strict';

describe('Filter: contactName', function () {
    var contactNameFilter;

    beforeEach(function () {
        module('datumprikkerApp');
        inject(function ($filter) {
            contactNameFilter = $filter('contactName');
        });
    });

    it('Should concat first and last names properly.', function () {
        var contact = { voornaam: 'Frank', achternaam: 'de Groot' };
        expect(contactNameFilter(contact)).toBe('Frank de Groot');
    });
});
