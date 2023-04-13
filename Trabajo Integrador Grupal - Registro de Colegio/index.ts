import Alumnos from "./claseAlumnos";
import promptSync from 'prompt-sync';

const prompt = promptSync();

const datosAlumnos: Array<{}> = [];

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

// const juanPerez = new Alumnos('Juan', 'Perez', 42347925, '07/12/2010', 100, modalidadSociales,);
// datosAlumnos.push(juanPerez);

// const marioGarcia = new Alumnos('Mario', 'Garcia', 40367121, '13/01/1009', 101, modalidadNaturales);
// datosAlumnos.push(marioGarcia);

// const joseMartinez = new Alumnos('Jose', 'Martinez', 44789098, '12/04/2011', 102, modalidadNaturales);
// datosAlumnos.push(joseMartinez);

//console.log(datosAlumnos);

function promedio(object: {}) {
    const arrayNotas: Array<number> = Object.values(object);
    const sumaNotas: number = arrayNotas.reduce((total, actual)=> total + actual, 0)
    const promedio = sumaNotas / arrayNotas.length
    return promedio
};

// const items = ['Gaston', 'Pedro', 'Juan']
// const seleccion = readLineSync.keyInSelect(items)
// console.log(`Hola ${items[seleccion]}, como estas?`);

// let nombre: string = String(prompt('Ingrese Nombre: ', ""));
// console.log(`Hola, ${nombre}. Bienvenido!`);

// const nombre: number = Number(prompt('Escriba su Edad: '));
// console.log(`Hola ${nombre}. Bienvenido!`);


















