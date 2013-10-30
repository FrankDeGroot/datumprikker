beforeEach(function () {
    this.addMatchers({
        toEqualJson: function (expected) {
            return JSON.stringify(this.actual) === JSON.stringify(expected);
        }
    });
})