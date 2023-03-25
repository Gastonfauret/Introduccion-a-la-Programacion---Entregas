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
        let fechaNacimiento = readlineSync.question('Escriba fecha de Nacimiento formato YYYY/MM/DD: ');
        let documento = readlineSync.question('Escriba Documento del Socio: ');
        let telefono = readlineSync.question('Escriba telefono del Socio: ');

        let ArrayDeporte = ['futbol', 'basket', 'zumba', 'voley', 'natacion', 'gym'];
        let deporte = readlineSync.keyInSelect(ArrayDeporte, 'Elige Deporte del Listado.'); //Muestra el Array de la linea anterior, como opciones de seleccion.
    
        let newSocio = new Jugador(nombre, apellido, fechaNacimiento, documento, telefono, deporte);

        let socios = [...this.data(), newSocio] // Spread Operator: Muestra el contenido del tipo de datos que le pacemos. En este caso un Array. Se agrega el 'newSocio'.
        fs.writeFileSync('./socios.json', JSON.stringify(socios, null, 2)); // Pasa los datos a Formato JSON. Parametro (archivo, reemplazo de archivo, espacios en el archivo).
    }
}