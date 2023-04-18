import Alumnos from "./claseAlumnos";
import Profesor from "./claseProfesores"
const fs = require('fs');
const readlineSync = require('readline-sync')

// fs.writeFileSync('./alumnos.json', '[]');
// fs.writeFileSync('./profesores.json', '[]')

function read() { return fs.readlineSync('./alumnos.json')}
function data() {return JSON.parse(fs.readFileSync('./alumnos.json'))};

function read2() { return fs.readlineSync('./profesores.json')};
function data2() {return JSON.parse(fs.readFileSync('./profesores.json'))};

// const datosAlumnos: Array<{}> = [];
// const datosProfesor: Array<{}> = [];
const materiasProfesor: Array<string> = [];

function añadeAlumno() {
    const nombre = readlineSync.question('Ingrese nombre del alumno: ');
    const apellido = readlineSync.question('Ingrese apellido del alumno: ');
    const dni = readlineSync.question('Ingrese dni del alumno: ');
    const fechaNacimiento = readlineSync.question('Ingrese fecha de nacimiento del alumno, formato DD/MM/AAAA: ');
    const matricula = Number(generadorMat());
    const modalidad = String(eligeModalidad());
    const materias = Object(añadeMaterias());
    const promedioFinal = promedio(materias);
    const profesores = añadeListadoProfesores();

    function añadeMaterias() {
        if (modalidad === 'Naturales') {
            const notaBiologia: number = Number(readlineSync.question('Ingrese nota de Biologia: '));
            const notaFisica: number = Number(readlineSync.question('Ingrese nota de Fisica: '));
            const notaQuimica: number = Number(readlineSync.question('Ingrese nota de Quimica: '));
            const notaAnatomia: number = Number(readlineSync.question('Ingrese nota de Anatomia: '));
            return { biologia: notaBiologia, fisica: notaFisica, quimica: notaQuimica, anatomia: notaAnatomia }}; 
        if (modalidad === 'Sociales') {
            const notaSociales: number = Number(readlineSync.question('Ingrese nota de Sociales: '));
            const notaCivica: number = Number(readlineSync.question('Ingrese nota de Civica: '));
            const notaPolitica: number = Number(readlineSync.question('Ingrese nota de Politica: '));
            const notaSociologia: number = Number(readlineSync.question('Ingrese nota de Sociologia: '));
            return { sociales: notaSociales, civica: notaCivica, politica: notaPolitica, sociologia: notaSociologia }};
    }

    function añadeListadoProfesores(): any {
        if (modalidad === 'Naturales') return { biologia: 'Manuel Barraza', fisica: 'Juan Manuel Martinez', quimica: 'Marcela Rojas', anatomia: 'Claudia Morales' };
        if (modalidad === 'Sociales') return { sociales: 'Carlos Benitez', civica: 'Maria del Carmen Fernandez', politica: 'Roberto Mandraccio', sociologia: 'Cristina Del Curto' };
    }

    const alumno = new Alumnos(nombre, apellido, dni, fechaNacimiento, matricula, modalidad, materias, promedioFinal, profesores);

    let alumnos = [...data(), alumno] 
    fs.writeFileSync('./alumnos.json', JSON.stringify(alumnos, null, 1));
    console.log(`Alumno añadido con Exito.`, alumno);
    menu();
}

function buscaAlumno() {
    // const apellido = readlineSync.question('Escriba el apellido del alumno que desea buscar: ');
    // let nombreEncontrado = datosAlumnos.find(element => element.apellido === apellido);
    // console.log(`Alumno encontrado`, nombreEncontrado);
    // menu();
}

function eliminaAlumno() {
    console.log('Se elimina alumno');
    menu();
}

function listadoAlumnos() {
    console.log(...data());
    menu()
}

function añadeProfesor() {
    const nombre: string = readlineSync.question('Ingrese nombre del profesor: ');
    const apellido: string = readlineSync.question('Ingrese apellido del profesor: ');
    const dni: number = readlineSync.question('Ingrese dni del profesor: ');
    const fechaNacimiento = readlineSync.question('Ingrese fecha de nacimiento del alumno, formato DD/MM/AAAA: ');
    const contrato: number = Number(generadorMat());
    const materias: any = añadeMateriasProf();

    const profesor: Profesor = new Profesor(nombre, apellido, dni, fechaNacimiento, contrato, materias); 

    let profesores = [...data2(), profesor] 
    fs.writeFileSync('./profesores.json', JSON.stringify(profesores, null, 1));
    console.log(`Profesor añadido con Exito.`, profesor);
    menu();
}

function añadeMateriasProf() {
    const cantidadMaterias: number = readlineSync.question('Cuantas materias desea agregar: ');
    for(let i = 0; i < cantidadMaterias; i++) {
        const eligeMaterias = ['Biologia', 'Fisica', 'Quimica', 'Anatomia', 'Sociales', 'Civica', 'Politica', 'Sociologia'];
        console.log('Seleccione las materias: ');
        let seleccionMaterias = readlineSync.keyInSelect(eligeMaterias);
        if (eligeMaterias[seleccionMaterias] === eligeMaterias[0]) seleccionMaterias = eligeMaterias[0];
        if (eligeMaterias[seleccionMaterias] === eligeMaterias[1]) seleccionMaterias = eligeMaterias[1];
        if (eligeMaterias[seleccionMaterias] === eligeMaterias[2]) seleccionMaterias = eligeMaterias[2];
        if (eligeMaterias[seleccionMaterias] === eligeMaterias[3]) seleccionMaterias = eligeMaterias[3];
        if (eligeMaterias[seleccionMaterias] === eligeMaterias[4]) seleccionMaterias = eligeMaterias[4];
        if (eligeMaterias[seleccionMaterias] === eligeMaterias[5]) seleccionMaterias = eligeMaterias[5];
        if (eligeMaterias[seleccionMaterias] === eligeMaterias[6]) seleccionMaterias = eligeMaterias[6];
        if (eligeMaterias[seleccionMaterias] === eligeMaterias[7]) seleccionMaterias = eligeMaterias[7];
        materiasProfesor.push(seleccionMaterias);
    }
    return materiasProfesor;    
}

function buscaProfesor() {
    console.log('Se buscar profesor');
    menu();
}

function eliminaProfesor() {
    console.log('Se elimina profesor');
    menu();
}

function promedio(materias: {}) {
    const arrayNotas: Array<number> = Object.values(materias);
    const promedio = arrayNotas.reduce((valorAnterior: number, valorActual: number) => {return valorAnterior + valorActual;}, 0);
    const promedioTotal = promedio / arrayNotas.length;
    return promedioTotal    
};

function eligeModalidad() {
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

const matricula = Math.floor(Math.random() * 11);
function generadorMat() {
    const matricula = Math.floor(Math.random() * 10000);
    return matricula
}