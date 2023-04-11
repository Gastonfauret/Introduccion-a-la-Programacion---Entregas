import { Personas } from "./interfacePersonas";
import Naturales from "./modalidadNaturales";
import Sociales from "./modalidadSociales";

export default class Alumnos implements Personas {
    nombre: string;
    apellido: string;
    dni: number;
    fechaNacimiento: string;
    matricula: number;    
    materias: Sociales | Naturales;

    constructor(nombre: string, apellido: string, dni: number, fechaNacimiento: string, matricula: number, materias: Sociales | Naturales) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        this.matricula = matricula;
        this.materias = materias
    }

    setInfo() {
        return Alumnos
    }
}