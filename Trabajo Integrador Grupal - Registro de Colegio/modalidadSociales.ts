export default class Sociales {
    private sociales: {};

    constructor(sociales = {}) {      
        this.sociales = sociales;  
    }

    setInfo(): void {
        console.log(this.sociales);        
    }
}
