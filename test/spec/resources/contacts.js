describe('Resource: contacts', function () {
    var $httpBackend, contactsRsrc;

    beforeEach(function () {
        module('datumprikkerApp');
        inject(function (_$httpBackend_, _contactsRsrc_) {
            $httpBackend = _$httpBackend_;
            contactsRsrc = _contactsRsrc_;
        });
    });

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should query contacts.json', function () {
        var contacts = [{}, {}, {}];
        $httpBackend.expectGET('contacts.json').respond(contacts);
        var result = contactsRsrc.query();
        $httpBackend.flush();
        expect(result).toEqualJson(contacts);
    });
});