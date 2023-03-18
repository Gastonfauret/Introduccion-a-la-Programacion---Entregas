"use strict";
exports.__esModule = true;
exports.RegistroAutomotor = void 0;
var fs = require("fs");
var baseDeDatosAutos = [];
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
    }
    RegistroAutomotor.prototype.update = function (dataBase) {
        console.log(dataBase);
    };
    RegistroAutomotor.prototype.addCar = function (dataBase, nuevoAuto) {
        if (dataBase.push(nuevoAuto)) {
            console.log("The car data has been successfully added.", nuevoAuto);
        }
        else {
            console.log("The car data has not been added.");
        }
    };
    RegistroAutomotor.prototype.consultDataBase = function (auto, dataBase) {
        var foundCar = dataBase.filter(function (car) { return car.marca === auto; });
        if (foundCar.length) {
            console.log("The datafile of '".concat(auto, "' has been found."));
            console.log(foundCar);
            // return foundCar;
        }
        else {
            console.log("The datafile of '".concat(auto, "' isn't in the datafile. "));
        }
    };
    RegistroAutomotor.prototype.deleteFile = function (auto, array) {
        var index = array.length;
        while (index > 0) {
            var deleteCar = array.findIndex(function (car) { return car.marca === auto; });
            if (deleteCar >= 0) {
                array.splice(deleteCar, 1);
                console.log("The datafile of '".concat(auto, "' has been deleted sucesfully."));
            }
            index--;
        }
    };
    // deleteFile(nombre: Auto, dataBase) {
    //     const archivoEliminado = dataBase.filter(element => element.nombre === nombre);
    //     if(archivoEliminado){  
    //         console.log(`The datafile has been deleted`);
    //         } else {
    //             return `The datafile could not be deleted`;
    //         }
    //     }
    RegistroAutomotor.prototype.arrayAJason = function (dataBase) {
        var updateCar = JSON.stringify(dataBase);
        fs.writeFileSync('./registro autos.json', updateCar, 'utf-8');
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
