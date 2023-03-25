/* 2 - Generar una clase abstracta llamada MiembroClub, que implemente la interface persona.
Agregar a esta clase abstracta la variable: miembroDesde que es de tipo string. 
Y representa la fecha de alta del socio.*/

import Persona from "./InterfacePersona";

export default abstract class MiembroClub implements Persona {
    nombre: string;
    apellido: string;
    fechaNacimiento: string;
    documento: number;
    telefono: number;
    miembroDesde: string;
    
    constructor(nombre: string, apellido: string, fechaNacimiento: string, documento: number, telefono: number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.fechaNacimiento = fechaNacimiento;
        this.documento = documento;
        this.telefono = telefono
        this.miembroDesde = new Date().toLocaleDateString();
    }
}