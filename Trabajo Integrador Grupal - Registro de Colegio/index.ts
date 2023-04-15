import Alumnos from "./claseAlumnos";
import promptSync from 'prompt-sync';
const fs = require('fs');
const readlineSync = require('readline-sync')

//const prompt = promptSync();

const datosAlumnos: Array<{}> = [];

/*
console.log('--------------------------------------------------');

const modalidadSociales = {sociales: 0, civica: 0, politica: 0, sociologia: 0};

const notaSociales: number = Number(prompt('Nota de Sociales: '));
const notaCivica: number = Number(prompt('Nota de Civica: '));
const notaPolitica: number = Number(prompt('Nota de Politica: '));
const notaSociologia: number = Number(prompt('Nota de Sociologia: '));

modalidadSociales.sociales = notaSociales;
modalidadSociales.civica = notaCivica;
modalidadSociales.politica = notaPolitica;
modalidadSociales.sociologia = notaSociologia;

console.log(`Notas de la Modalidad Sociales ${ Object.values(modalidadSociales)}`);
console.log('Promedio: ', promedio(modalidadSociales));

console.log('--------------------------------------------------');

const modalidadNaturales = {biologia: 0, fisica: 0, quimica: 0, anatomia: 0};

const notaBiologia: number = Number(prompt('Nota de Biologia: '));
const notaFisica: number = Number(prompt('Nota de Fisica: '));
const notaQuimica: number = Number(prompt('Nota de Quimica: '));
const notaAnatomia: number = Number(prompt('Nota de Anatomia: '));

modalidadNaturales.biologia = notaBiologia;
modalidadNaturales.fisica = notaFisica;
modalidadNaturales.quimica = notaQuimica;
modalidadNaturales.anatomia = notaAnatomia;

console.log(`Notas de la Modalidad Sociales ${ Object.values(modalidadNaturales)}`);
console.log('Promedio: ', promedio(modalidadNaturales));

console.log('--------------------------------------------------');

// console.log(modalidadSociales);
// console.log(modalidadNaturales);

// console.log(promedio(modalidadSociales));
// console.log(promedio(modalidadNaturales));
*/

const modalidadSociales = { sociales: 0, civica: 0, politica: 0, sociologia: 0 };
const modalidadNaturales = { biologia: 0, fisica: 0, quimica: 0, anatomia: 0 };

const juanPerez = new Alumnos('Juan', 'Perez', 42347925, '07/12/2010', 100, modalidadSociales, 10, { lengua: 'Juan Garcia', Biologia: 'Marcelo Bettini' });
datosAlumnos.push(juanPerez);

const marioGarcia = new Alumnos('Mario', 'Garcia', 40367121, '13/01/1009', 101, modalidadNaturales, 8, { Fisica: 'Tomas Cardenas' });
datosAlumnos.push(marioGarcia);

const joseMartinez = new Alumnos('Jose', 'Martinez', 44789098, '12/04/2011', 102, modalidadNaturales, 7, { quimica: 'Peto Menahen' });
datosAlumnos.push(joseMartinez);

//console.log(datosAlumnos);

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
    const modalidad = readlineSync.question('Elija la modalidad, Naturales - Sociales: ');
    console.log(`Alumno añadido con Exito:
    Nombre: ${nombre},
    Apellido: ${apellido},
    Dni: ${dni},
    Fecha de Nacimiento: ${fechaNacimiento},
    Modalidad: ${modalidad}`);
    menu();
}

function buscaAlumno() {
    console.log('Se buscar alumno');
    menu();
}

function eliminaAlumno() {
    console.log('Se elimina alumno');
    menu();
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

function menu() {
    const items = ['Anadir Alumno', 'Buscar Alumno', 'Eliminar Alumno', 'Anadir Profesor', 'Buscar Profesor', 'Eliminar Profesor'];
    const seleccion = readlineSync.keyInSelect(items)

    if (items[seleccion] === items[0]) añadeAlumno();
    else if (items[seleccion] === items[1]) buscaAlumno();
    else if (items[seleccion] === items[2]) eliminaAlumno();
    else if (items[seleccion] === items[3]) añadeProfesor();
    else if (items[seleccion] === items[4]) buscaProfesor();
    else if (items[seleccion] === items[4]) eliminaProfesor();
}

menu();



//console.log(`Hola ${items[seleccion]}, como estas?`);

// let nombre: string = String(prompt('Ingrese Nombre: ', ""));
// console.log(`Hola, ${nombre}. Bienvenido!`);

// const nombre: number = Number(prompt('Escriba su Edad: '));
// console.log(`Hola ${nombre}. Bienvenido!`);


















