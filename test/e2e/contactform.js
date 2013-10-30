describe('E2E: Contact form', function () {
    beforeEach(function () {
        browser().navigateTo('/');
        input('newContact.voornaam').enter('Frank');
        input('newContact.achternaam').enter('de Boer');
    });

    it('should disable the submitbutton when the form is invalid', function () {
        input('newContact.email').enter('invalid@emailadress');
        var button = element('form[name="newContactForm"] button');
        expect(button.attr('disabled')).toBeTruthy();
    });

    it('should enable the submitbutton when the form is valid', function () {
        input('newContact.email').enter('frank@deboer.nl');
        var button = element('form[name="newContactForm"] button');
        expect(button.prop('disabled')).toBeFalsy();
    });

    it('should add a contact to the list when submitting the form', function () {
        input('newContact.email').enter('frank@deboer.nl');
        element('form[name="newContactForm"] button').click();
        expect(repeater('table > tbody tr').count()).toBe(5);
    });
});