import Materia from "./claseMaterias";

let modalidades: Array<object> = [];
// console.log(modalidades);
// console.log(typeof(modalidades));

const sociales: Array<string> = ['Sociales', 'Civica', 'Politica', 'Sociologia'];
const naturales: Array<string> = ['Biologia', 'Fisica', 'Quimica', 'Anatomia'];
const otroArray: Array<object> = [];
otroArray.push(sociales);
otroArray.push(naturales);
console.log(otroArray);


modalidades = new Materia();
