import Alumnos from "./claseAlumnos";

const datosAlumnos: Array<{}> = [];

const modalidadSociales = {sociales: 0, civica: 0, politica: 0, sociologia: 0};
const modalidadNaturales = {biologia: 0, fisica: 0, quimica: 0, anatomia: 0};

console.log(modalidadSociales);
console.log(modalidadNaturales);

modalidadSociales.sociales = 9;
modalidadSociales.civica = 8;
modalidadSociales.politica = 7;
modalidadSociales.sociologia = 10;

modalidadNaturales.biologia = 7;
modalidadNaturales.fisica = 6;
modalidadNaturales.quimica = 1;
modalidadNaturales.anatomia = 0;

console.log(modalidadSociales);
console.log(modalidadNaturales);

console.log(promedio(modalidadSociales));
console.log(promedio(modalidadNaturales));


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



















