import Alumnos from "./claseAlumnos";
import Profesor from "./claseProfesores";

const fs = require('fs');
const readlineSync = require('readline-sync')
export default class RegistroColegio {
    // constructor() {
    //     fs.writeFileSync('./alumnos.json', '[]');
    //     fs.writeFileSync('./profesores.json', '[]');     
    // }
    constructor() {
        if (fs.existsSync("./alumnos.json.json")) {
            console.log("Archivo existente");
    
        } else {
            fs.writeFileSync("./alumnos.json.json", "[]", "utf-8");
        }
        if (fs.existsSync("./profesores.json.json")) {
            console.log("Archivo existente");
        } else {
            fs.writeFileSync("./profesores.json", "[]", "utf-8")
        }    
    }

    read() { return fs.readlineSync('./alumnos.json') };
    data() { return JSON.parse(fs.readFileSync('./alumnos.json')) };

    read2() { return fs.readlineSync('./profesores.json') };
    data2() { return JSON.parse(fs.readFileSync('./profesores.json')) };

    materiasProfesor: Array<string> = [];

añadeAlumno() {
    const nombre = readlineSync.question('Ingrese nombre del alumno: ');
    const apellido = readlineSync.question('Ingrese apellido del alumno: ');
    const dni = readlineSync.question('Ingrese dni del alumno: ');
    const fechaNacimiento = readlineSync.question('Ingrese fecha de nacimiento del alumno, formato DD/MM/AAAA: ');
    const matricula = Number(this.generadorMat());
    const modalidad = String(this.eligeModalidad());
    const materias = Object(añadeMaterias());
    const promedioFinal = this.promedio(materias);
    const profesores = añadeListadoProfesores();

    function añadeMaterias(): any {
        if (modalidad === 'Naturales') {
            const notaBiologia: number = Number(readlineSync.question('Ingrese nota de Biologia: '));
            const notaFisica: number = Number(readlineSync.question('Ingrese nota de Fisica: '));
            const notaQuimica: number = Number(readlineSync.question('Ingrese nota de Quimica: '));
            const notaAnatomia: number = Number(readlineSync.question('Ingrese nota de Anatomia: '));
            return { biologia: notaBiologia, fisica: notaFisica, quimica: notaQuimica, anatomia: notaAnatomia }
        };
        if (modalidad === 'Sociales') {
            const notaSociales: number = Number(readlineSync.question('Ingrese nota de Sociales: '));
            const notaCivica: number = Number(readlineSync.question('Ingrese nota de Civica: '));
            const notaPolitica: number = Number(readlineSync.question('Ingrese nota de Politica: '));
            const notaSociologia: number = Number(readlineSync.question('Ingrese nota de Sociologia: '));
            return { sociales: notaSociales, civica: notaCivica, politica: notaPolitica, sociologia: notaSociologia }
        };
    }

    function añadeListadoProfesores(): any {
        if (modalidad === 'Naturales') return { biologia: 'Manuel Barraza', fisica: 'Marcela Rojas', quimica: 'Marcela Rojas', anatomia: 'Claudia Morales' };
        if (modalidad === 'Sociales') return { sociales: 'Carlos Benitez', civica: 'Carlos Benitez', politica: 'Roberto Mandraccio', sociologia: 'Cristina Del Curto' };
    }

    const alumno = new Alumnos(nombre, apellido, dni, fechaNacimiento, matricula, modalidad, materias, promedioFinal, profesores);

    let alumnos = [this.data(), alumno]
    fs.writeFileSync('./alumnos.json', JSON.stringify(alumnos, null, 1));
    console.log(`Alumno añadido con Exito.`, alumno);
    this.menu();
}

buscaAlumno() {
    console.log('Seleccione el Tipo de dato que desea buscar: ');
    const datosDeBusqueda: Array<string> = ['Apellido', 'Dni', 'Numero Matricula'];
    const seleccionDeDatos = readlineSync.keyInSelect(datosDeBusqueda);
    if (datosDeBusqueda[seleccionDeDatos] === datosDeBusqueda[0])
    return busquedaXapellido();
    if (datosDeBusqueda[seleccionDeDatos] === datosDeBusqueda[1]) return busquedaXdni();
    if (datosDeBusqueda[seleccionDeDatos] === datosDeBusqueda[2]) return busquedaXmatricula();

    function busquedaXapellido (this: any) {
        const apellido = readlineSync.question('Escriba el apellido del alumno que desea buscar: ');        
        let nombreEncontrado = this.data().filter((element: { apellido: string }) => element.apellido === apellido);
        console.log(`Alumno encontrado:`, nombreEncontrado);
        this.menu();
    }

    function busquedaXdni(this: any) {
        const dni = readlineSync.question('Escriba el dni del alumno que desea buscar: ');
        let dniEncontrado = this.data().filter((element: { dni: number }) => element.dni === dni);
        console.log(`Alumno encontrado:`, dniEncontrado);
        this.menu();
    }

    function busquedaXmatricula(this: any) {
        const matricula = readlineSync.question('Escriba la Matricula del alumno que desea buscar: ');
        let matriculaEncontrada = this.data().filter((element: { matricula: number }) => element.matricula === matricula);
        console.log(`Alumno encontrado:`, matriculaEncontrada);
        this.menu();
    }
}

eliminaAlumno(this: any) {
    const dni = readlineSync.question('Escriba el dni del alumno que desea eliminar: ');
    let dniEncontrado = this.data().filter((element: { dni: number }) => element.dni === dni);
    //delete dniEncontrado;
    this.menu();
}

listadoAlumnos(this: any) {
    console.log(this.data());
    this.menu()
}

listadoProfesores(this: any) {
    console.log(this.data2());
    this.menu()
}

añadeProfesor(this: any) {
    const nombre: string = readlineSync.question('Ingrese nombre del profesor: ');
    const apellido: string = readlineSync.question('Ingrese apellido del profesor: ');
    const dni: number = readlineSync.question('Ingrese dni del profesor: ');
    const fechaNacimiento = readlineSync.question('Ingrese fecha de nacimiento del alumno, formato DD/MM/AAAA: ');
    const contrato: number = Number(this.generadorMat());
    const materias: any = this.añadeMateriasProf();

    const profesor: Profesor = new Profesor(nombre, apellido, dni, fechaNacimiento, contrato, materias);

    let profesores = [...this.data2(), profesor]
    fs.writeFileSync('./profesores.json', JSON.stringify(profesores, null, 1));
    console.log(`Profesor añadido con Exito.`, profesor);
    this.menu();
}

añadeMateriasProf() {
    const cantidadMaterias: number = readlineSync.question('Cuantas materias desea agregar: ');
    for (let i = 0; i < cantidadMaterias; i++) {
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
        this.materiasProfesor.push(seleccionMaterias);
    }
    return this.materiasProfesor;
}

buscaProfesor() {
    console.log('Se buscar profesor');
    this.menu();
}

eliminaProfesor() {
    console.log('Se elimina profesor');
    this.menu();
}

promedio(materias: {}) {
    const arrayNotas: Array<number> = Object.values(materias);
    const promedio = arrayNotas.reduce((valorAnterior: number, valorActual: number) => { return valorAnterior + valorActual; }, 0);
    const promedioTotal = promedio / arrayNotas.length;
    return promedioTotal
};

eligeModalidad() {
    const modalidad = ['Naturales', 'Sociales'];
    console.log('Seleccione la modalidad: ');
    const seleccionModalidad = readlineSync.keyInSelect(modalidad);
    if (modalidad[seleccionModalidad] === modalidad[0]) return modalidad[0];
    if (modalidad[seleccionModalidad] === modalidad[1]) return modalidad[1];
}

menu(this: any) {
    const items = ['Anadir Alumno', 'Buscar Alumno', 'Eliminar Alumno', 'Listado de Alumnos', 'Anadir Profesor', 'Buscar Profesor', 'Eliminar Profesor', 'Listado de Profesores'];
    const seleccion = readlineSync.keyInSelect(items)

    if (items[seleccion] === items[0]) this.añadeAlumno();
    else if (items[seleccion] === items[1]) this.buscaAlumno();
    else if (items[seleccion] === items[2]) this.eliminaAlumno();
    else if (items[seleccion] === items[3]) this.listadoAlumnos();
    else if (items[seleccion] === items[4]) this.añadeProfesor();
    else if (items[seleccion] === items[5]) this.buscaProfesor();
    else if (items[seleccion] === items[6]) this.eliminaProfesor();
    else if (items[seleccion] === items[7]) this.listadoProfesores();
}

matricula = Math.floor(Math.random() * 11);
generadorMat() {
    const matricula = Math.floor(Math.random() * 10000);
    return matricula
    }    
}