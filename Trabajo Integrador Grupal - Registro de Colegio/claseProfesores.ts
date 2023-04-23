//Importacion de la interfas Personas.
import Personas from "./interfacePersonas";

//Creacion de la Clase Profesores de la cual se implementa la interfas Personas.
export default class Profesor implements Personas{
    nombre: string;
    apellido: string;
    dni: number;
    fechaNacimiento: string;
    contrato: number;
    modalidad: string;    
    materias: object

    constructor(nombre: string, apellido: string, dni: number, fechaNacimiento: string, contrato: number, modalidad: string, materias: object) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        this.contrato = contrato;
        this.modalidad = modalidad;
        this.materias = materias
    }    
}