import Alumnos from "./claseAlumnos";
//const fs = require('fs');
const readlineSync = require('readline-sync')

const datosAlumnos: Array<{}> = [];

function promedio(object: {}) {
    const arrayNotas: Array<number> = Object.values(object);
    const sumaNotas: number = arrayNotas.reduce((total, actual) => total + actual, 0)
    const promedio = sumaNotas / arrayNotas.length
    return promedio
};

function añadeAlumno() {
    const nombre = readlineSync.question('Ingrese nombre del alumno: ');
    const apellido = readlineSync.question('Ingrese apellido del alumno: ');
    const dni = readlineSync.question('Ingrese dni del alumno: ');
    const fechaNacimiento = readlineSync.question('Ingrese fecha de nacimiento del alumno, formato DD/MM/AAAA: ');
    const matricula = 100
    const modalidad = String(eligeModalidad());
    const materias = añadeMaterias();
    const promedioFinal = promedio(materias)
    const profesores = añadeProfesores();

    function añadeMaterias(): any {
        if (modalidad === 'Naturales') return { biologia: 0, fisica: 0, quimica: 0, anatomia: 0 }; if (modalidad === 'Sociales') return { sociales: 0, civica: 0, politica: 0, sociologia: 0 };
    }

    function añadeProfesores(): any {
        if (modalidad === 'Naturales') return { biologia: 'Manuel Barraza', fisica: 'Juan Manuel Martinez', quimica: 'Marcela Rojas', anatomia: 'Claudia Morales' };
        if (modalidad === 'Sociales') return { sociales: 'Carlos Benitez', civica: 'Maria del Carmen Fernandez', politica: 'Roberto Mandraccio', sociologia: 'Cristina Del Curto' };
    }

    const alumno = new Alumnos(nombre, apellido, dni, fechaNacimiento, matricula, modalidad, materias, promedioFinal, profesores);

    datosAlumnos.push(alumno);
    console.log(`Alumno añadido con Exito`, alumno);
    menu();
}

function buscaAlumno() {
    const apellido = readlineSync.question('Escriba el apellido del alumno que desea buscar: ');
    let nombreEncontrado = datosAlumnos.find(element => element.apellido === apellido);
    console.log(`Alumno encontrado`, nombreEncontrado);
    menu();
}

function eliminaAlumno() {
    console.log('Se elimina alumno');
    menu();
}

function listadoAlumnos() {
    console.log(datosAlumnos);
    menu()
}

function añadeProfesor() {
    console.log('Se añade profesor');
    menu();
}

function buscaProfesor() {
    console.log('Se buscar profesor');
    menu();
}

function eliminaProfesor() {
    console.log('Se elimina profesor');
    menu();
}

function eligeModalidad(): any {
    const modalidad = ['Naturales', 'Sociales'];
    console.log('Seleccione la modalidad: ');
    const seleccionModalidad = readlineSync.keyInSelect(modalidad);
    if (modalidad[seleccionModalidad] === modalidad[0]) return modalidad[0];
    if (modalidad[seleccionModalidad] === modalidad[1]) return modalidad[1];
}

function menu() {
    const items = ['Anadir Alumno', 'Buscar Alumno', 'Eliminar Alumno', 'Listado de Alumnos', 'Anadir Profesor', 'Buscar Profesor', 'Eliminar Profesor',];
    const seleccion = readlineSync.keyInSelect(items)

    if (items[seleccion] === items[0]) añadeAlumno();
    else if (items[seleccion] === items[1]) buscaAlumno();
    else if (items[seleccion] === items[2]) eliminaAlumno();
    else if (items[seleccion] === items[3]) listadoAlumnos();
    else if (items[seleccion] === items[4]) añadeProfesor();
    else if (items[seleccion] === items[5]) buscaProfesor();
    else if (items[seleccion] === items[6]) eliminaProfesor();

}

menu();

//console.log(`Hola ${items[seleccion]}, como estas?`);

// let nombre: string = String(prompt('Ingrese Nombre: ', ""));
// console.log(`Hola, ${nombre}. Bienvenido!`);

// const nombre: number = Number(prompt('Escriba su Edad: '));
// console.log(`Hola ${nombre}. Bienvenido!`);