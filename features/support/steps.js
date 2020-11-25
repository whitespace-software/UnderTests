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
Given('A prefix of {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
     
  });

  When('I run make insured name', function () {
    // Write code here that turns the phrase above into concrete actions
    
  });



 Then('I get insured name starting {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
       });