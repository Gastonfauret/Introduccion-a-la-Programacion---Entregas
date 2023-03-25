/*4- Generar una clase que maneje el club, GestorClub, que deberá permitirnos la persistencia 
de nuestros datos. Usaremos filesystem para crear un archivo JSON donde guardaremos nuestros 
socios. Tambien usaremos el paquete readlineSync para pedir por consola los datos que necesitamos 
de nuestros socios. Debemos guardar 10 socios.*/

const fs = require('fs'); // Se importa la libreria 'file sync' de node.
const readlineSync = require('readline-sync') // Funcion que pide los datos por consola.

import { Deporte, Jugador} from "./Jugador";

export default class GestorClub {
    constructor() {
        fs.writeFileSync('./socios.json', '[]') //Funcion que genera un archivo JSON, parametros(archivos que va a generar, que formato le vas a meter).
    }

    read() { return fs.readlineSync('./socios.json')}; // Toma el arhivo de 'socios.jason' y lo lee.
    data() {return JSON.parse(fs.readFileSync('./socios.json'))}; // Toma el archivo 'socios.json' lo covierte en objeto de JS. Para poder manipularlo como un array.
    
    agregarSocio(){
        let nombre = readlineSync.question('Escriba Nombre del Socio: ');
        let apellido = readlineSync.question('Escriba Apellido del Socio: ');
        let fechaNacimiento = readlineSync.question('Escriba fecha de Nacimiento formato DD/MM/YYYY: ');
        let documento = readlineSync.question('Escriba Documento del Socio: ');
        let telefono = readlineSync.question('Escriba telefono del Socio: ');

        let ArrayDeporte = ['futbol', 'basket', 'zumba', 'voley', 'natacion', 'gym'];
        let deporte = readlineSync.keyInSelect(ArrayDeporte, 'Elige Deporte del Listado.'); //Muestra el Array de la linea anterior, como opciones de seleccion.
    
        let newSocio = new Jugador(nombre, apellido, fechaNacimiento, documento, telefono, deporte);

        let socios = [...this.data(), newSocio] // Spread Operator: Muestra el contenido del tipo de datos que le pacemos. En este caso un Array. Se agrega el 'newSocio'.
        fs.writeFileSync('./socios.json', JSON.stringify(socios, null, 2)); // Pasa los datos a Formato JSON. Parametro (archivo, reemplazo de archivo, espacios en el archivo).
    }

    buscarSocioXNombre() {
        let nombre: string  = readlineSync.question('Escriba Nombre del Socio que desea buscar: ');
        const nombreEncontrado: string = this.data().find((socio: {nombre: string}) => socio.nombre === nombre);
        console.log(`El nombre '${nombre}' se encuentra en la base de datos.`);
        return nombreEncontrado;
    }

    buscarSocioXApellido() {
        let apellido: string  = readlineSync.question('Escriba el apellido del Socio que desea buscar: ');
        const apellidoEncontrado: string = this.data().find((socio: {apellido: string}) => socio.apellido === apellido);
        console.log(`El apellido '${apellido}' se encuentra en la base de datos.`);
        return apellidoEncontrado;
    }

    buscarSocioXDni() {
        let documento: number  = readlineSync.question('Escriba el DNI del Socio que desea buscar: ');
        const dniEncontrado: number = this.data().find((dni: {documento: number}) => dni.documento === documento);
        console.log(`El DNI '${documento}' se encuentra en la base de datos.`);
        return dniEncontrado;
    }

    buscarSocioXFechaNacimiento() {
        let fecha: string  = readlineSync.question('Escriba la fecha de nacimiento del Socio que desea buscar. Formato DD/MM/YYYY: ');
        const fechaEncontrada: string = this.data().find((fechaNac: {fechaNacimiento: string}) => fechaNac.fechaNacimiento === fecha);
        console.log(`La fecha '${fecha}' se encuentra en la base de datos.`);
        return fechaEncontrada;
    }
}