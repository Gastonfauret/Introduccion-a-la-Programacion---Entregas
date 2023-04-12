import Alumnos from "./claseAlumnos";

const datosAlumnos: Array<{}> = [];

const modalidadSociales: {} = {Sociales: 0, Civica: 0, Politica: 0, Sociologia: 0};
const modalidadNaturales: {} = {Biologia: 0, Fisica: 0, Quimica: 0, Anatomia: 0};

const juanPerez = new Alumnos('Juan', 'Perez', 42347925, '07/12/2010', 100, modalidadSociales,);
datosAlumnos.push(juanPerez);

const marioGarcia = new Alumnos('Mario', 'Garcia', 40367121, '13/01/1009', 101, modalidadNaturales);
datosAlumnos.push(marioGarcia);

const joseMartinez = new Alumnos('Jose', 'Martinez', 44789098, '12/04/2011', 102, modalidadNaturales);
datosAlumnos.push(joseMartinez);

console.log(datosAlumnos);