export default class Naturalez {
    private naturalez: {};

    constructor(naturalez = {}) {      
        this.naturalez = naturalez;  
    }

    setInfo(): void {
        console.log(this.naturalez);        
    }
}
