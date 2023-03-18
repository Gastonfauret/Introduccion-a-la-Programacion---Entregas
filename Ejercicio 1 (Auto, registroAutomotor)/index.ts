import {Auto} from "./claseAuto.js";
import { RegistroAutomotor } from "./registroAutomotor.js";
import * as fs from "fs";

let dataBase: [] = [];
const manage = new RegistroAutomotor;

try {
    const data:string = fs.readFileSync('./registro autos.json', "utf8");
    let concess = JSON.parse(data);
    dataBase = concess.map((car:{}) => car);
} catch (error) {
    let errorMessage = "No se ha podido acceder al archivo de texto";
    fs.writeFileSync("./error.txt", errorMessage, "utf8");
}

const palio: Auto = new Auto('Palio', 'Fire', 1.3, 'ABC-123', 123456789, 987654321);
const cronos: Auto = new Auto ('Chevrolet', 'Cronos', 1.4, 'ABC-012', 123456788, 987654322);
const citroen: Auto = new Auto ('C3', 'Airwave', 1.4, 'ABC-001', 123456888, 987654222);
const fiesta: Auto = new Auto ('Ford', 'Fiesta', 1.4, 'ABC-002', 123458888, 987652222);
const civic: Auto = new Auto ('Honda', 'Civic', 1.8, 'ABC-003', 123458888, 987622222);
const gol: Auto = new Auto ('Volkswagen', 'Gol', 1.4, 'ABC-004', 123488888, 987222222);

// // Se Añaden los autos:
manage.addCar(dataBase, palio);
manage.addCar(dataBase, cronos);
manage.addCar(dataBase, citroen)
manage.addCar(dataBase, fiesta);
manage.addCar(dataBase, civic);
manage.addCar(dataBase, gol);

// // Consulta de Datos:
manage.consultDataBase('Chevrolet', dataBase);
manage.consultDataBase('Honda', dataBase);

// Elimina datos: 
manage.deleteFile('Volkswagen', dataBase);
manage.deleteFile('Chevrolet', dataBase);

//Actualiza el Archivo JSON:
manage.arrayAJason(dataBase);

console.log(dataBase);









