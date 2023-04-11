export default class Materia {
    modalidades: Array<object>;
    constructor(modalidades: Array<object>) {      
        this.modalidades = modalidades;  
    }

    setInfo(): void {
        console.log(this.modalidades);        
    }
}
