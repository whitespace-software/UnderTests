# UnderTests
API Testing in Node using Cucumber-JS

## Setup
- Follow https://docs.microsoft.com/en-us/windows/nodejs/setup-on-windows 
- which points to https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows
- which points to https://github.com/coreybutler/nvm-windows/releases
- which downloads https://github.com/coreybutler/nvm-windows/releases/download/1.1.7/nvm-setup.zip
- but I had to use https://github.com/coreybutler/nvm-windows/issues/41 to fix nvm\settings.txt
- Then I went with Visual Studio Code https://code.visualstudio.com/ (which forced an upgrade of Git)
- and the Extension Pack https://marketplace.visualstudio.com/items?itemName=waderyan.nodejs-extension-pack
```
Command Prompt as Administrator
nvm install latest
nvm use 15.0.0
node -v
```

## Start a Project
```
Command Prompt
cd c:\
mkdir Code
cd Code
mkdir UnderTests
cd UnderTests

npm install cucumber

mkdir features
mkdir features\support
# edit checks.feature world.js and steps.js to be as below
node_modules\.bin\cucumber-js
# should get a single error, because the logic does not yet know 'B' is not a valid UMR
```

## Files
### checks.feature
```
Feature: Various Checks

    Scenario: Good UMRs
        Given a UMR of "<umr>"
        When I run the umr check
        Then I get a check result of true
        Examples:
        | umr | 
        | B0999JC2110200826 |
        | B0999J |

    Scenario: Bad UMRs
        Given a UMR of "<umr>"
        When I run the umr check
        Then I get a check result of false
        Examples:
        | umr |
        | X | 
        | B |
#        | B0999 |
#        | B0999JC2110200826X | 
#        | B0999JC2110 00826 |
#        | B0999JC2110-00826 |
#        | B0999JC2110a00826 |
```
### world.js
```
const { setWorldConstructor } = require( "cucumber");

class CustomWorld {
    constructor() {
        this.UMR = "";
        this.checkResult = null;
    }
    setUMR( value ) {
        this.UMR = value;
    }
    checkUMR() { // B1234X to B1234ABCDEFGHIJKL - twelve uppercase letters or digits 
        this.checkResult = false;
        if( this.UMR[0] != 'B') {
            return;
        }
        this.checkResult = true;
    }
    

    getResult() {
        return this.checkResult;
    }
}

setWorldConstructor(CustomWorld);
```
### steps.js
```
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
```


