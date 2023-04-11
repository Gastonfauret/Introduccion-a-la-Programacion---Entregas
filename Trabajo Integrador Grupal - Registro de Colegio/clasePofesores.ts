import { Personas } from "./interfacePersonas";
import Naturales from "./modalidadNaturales";
import Sociales from "./modalidadSociales";

export default class Profesor implements Personas{
    nombre: string;
    apellido: string;
    dni: number;
    fechaNacimiento: string;
    contrato: number;    
    materias: object

    constructor(nombre: string, apellido: string, dni: number, fechaNacimiento: string, contrato: number, materias: object) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        this.contrato = contrato;
        this.materias = materias
    }

    setInfo() {
        return Profesor
    }
}