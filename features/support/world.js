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
        if( this.UMR.length > 17 ) {
            return;
        }
        if( this.UMR[0] != 'B') {
            return;
        }
        var i;
        for(i=5;i<this.UMR.length;i++){  
            var c = this.UMR[i];
            if(c>='A'&&c<='Z')
             continue;
             if(c>='0'&&c<='9')
             continue;
             return;
          
        }


        this.checkResult = true;
    }
    

    getResult() {
        return this.checkResult;
    }
}

setWorldConstructor(CustomWorld);