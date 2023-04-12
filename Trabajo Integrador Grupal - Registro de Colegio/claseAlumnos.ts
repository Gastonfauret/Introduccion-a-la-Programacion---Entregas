import Personas from "./interfacePersonas";
export default class Alumnos implements Personas {
    nombre: string;
    apellido: string;
    dni: number;
    fechaNacimiento: string;
    matricula: number;    
    materias: {};
    promedio: number;
    profesores: {};

    constructor(nombre: string, apellido: string, dni: number, fechaNacimiento: string, matricula: number, materias: {}, promedio: number, profesores: {}) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
        this.matricula = matricula;
        this.materias = materias;
        this.promedio = promedio;
        this.profesores = profesores;
    }
    
    promedioTotal(materia: {}) {
        const sumaNota: Array<number> = Object.values(this.materias);
        const promedio: number = sumaNota.reduce((total, actual)=> total + actual, 0)
        return promedio;
    } 
}

