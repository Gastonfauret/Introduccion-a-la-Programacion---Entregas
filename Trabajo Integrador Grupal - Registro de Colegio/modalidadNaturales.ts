export default class Naturales {
    private naturales: {};

    constructor(naturales = {}) {      
        this.naturales = naturales;  
    }

    setInfo(): void {
        console.log(this.naturales);        
    }
}
