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
        if( this.UMR.length < 6 ) {
            return;
        }
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