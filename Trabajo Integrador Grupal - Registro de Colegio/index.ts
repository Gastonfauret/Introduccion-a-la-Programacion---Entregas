import {Materia} from "./claseMaterias";
let materia: string[] = [];
//console.log(typeof(materia));

const sociales: string[] = ['Sociales', 'Civica', 'Politica', 'Sociologia'];
const naturales: string[] = ['Biologia', 'Fisica', 'Quimica', 'Anatomia'];

materia = new Materia(sociales);
materia.push(sociales)

// materia = new Materia(sociales);
console.log(materia);

