const { Given, When, Then } = require( "cucumber");
const assert = require( "assert").strict;

Given('a UMR of {string}', function (input) {
    this.UMR = input;
});

When('I run the umr check', function () {
    this.checkUMR();
});

Then('I get a check result of true', function () {
    assert.strictEqual( this.checkResult, true, `oops for ${this.UMR}` );
});

Then('I get a check result of false', function () {
    assert.strictEqual( this.checkResult, false, `oops for ${this.UMR}` );
});