"use strict";
exports.__esModule = true;
var claseAuto_js_1 = require("./claseAuto.js");
var registroAutomotor_js_1 = require("./registroAutomotor.js");
var fs = require("fs");
var dataBase = [];
var manage = new registroAutomotor_js_1.RegistroAutomotor;
try {
    var data = fs.readFileSync('./registro autos.json', "utf8");
    var concess = JSON.parse(data);
    dataBase = concess.map(function (car) { return car; });
}
catch (error) {
    var errorMessage = "No se ha podido acceder al archivo de texto";
    fs.writeFileSync("./error.txt", errorMessage, "utf8");
}
var palio = new claseAuto_js_1.Auto('Palio', 'Fire', 1.3, 'ABC-123', 123456789, 987654321);
var cronos = new claseAuto_js_1.Auto('Chevrolet', 'Cronos', 1.4, 'ABC-012', 123456788, 987654322);
var citroen = new claseAuto_js_1.Auto('C3', 'Airwave', 1.4, 'ABC-001', 123456888, 987654222);
var fiesta = new claseAuto_js_1.Auto('Ford', 'Fiesta', 1.4, 'ABC-002', 123458888, 987652222);
var civic = new claseAuto_js_1.Auto('Honda', 'Civic', 1.8, 'ABC-003', 123458888, 987622222);
var gol = new claseAuto_js_1.Auto('Volkswagen', 'Gol', 1.4, 'ABC-004', 123488888, 987222222);
// // Se Añaden los autos:
manage.addCar(dataBase, palio);
manage.addCar(dataBase, cronos);
manage.addCar(dataBase, citroen);
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
