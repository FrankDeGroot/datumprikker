'use strict';

describe('E2E: Routes', function () {
    beforeEach(function () {
        browser().navigateTo('/');
    });

    it('should allow navigating to /invite', function () {
        browser().navigateTo('#/invite');
        expect(browser().location().path()).toBe('/invite');
    });
});