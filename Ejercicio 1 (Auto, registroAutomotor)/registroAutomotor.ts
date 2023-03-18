import {Auto} from './claseAuto';
import * as fs from "fs";

const baseDeDatosAutos: string [] = [];

export class RegistroAutomotor{
    update(dataBase: Auto) {
        console.log(dataBase);       
    } 

    addCar(dataBase, nuevoAuto: Auto) {
        if(dataBase.push(nuevoAuto)) {
            console.log(`The car data has been successfully added.`, nuevoAuto);
        } else {
            console.log(`The car data has not been added.`);
        }
    }

    consultDataBase(auto:string, dataBase:Auto[]) {
        let foundCar: Auto[] = dataBase.filter((car: any) => car.marca === auto);
        if(foundCar.length) {
            console.log(`The datafile of '${auto}' has been found.`);
            console.log(foundCar);
            // return foundCar;
        } else {
            console.log(`The datafile of '${auto}' isn't in the datafile. `);
        }
    }

    deleteFile(auto:string, array:Auto[]) {
        let index: number = array.length;
        while (index > 0) {
            const deleteCar: number = array.findIndex((car: any) => car.marca === auto);
            if (deleteCar >= 0) {
            array.splice(deleteCar, 1);
            console.log(`The datafile of '${auto}' has been deleted sucesfully.`);
            
            }
        index--;
    }
}

    // deleteFile(nombre: Auto, dataBase) {
    //     const archivoEliminado = dataBase.filter(element => element.nombre === nombre);
    //     if(archivoEliminado){  
    //         console.log(`The datafile has been deleted`);
    //         } else {
    //             return `The datafile could not be deleted`;
    //         }
    //     }

    arrayAJason(dataBase:Auto[]) {
        const updateCar= JSON.stringify(dataBase);
        fs.writeFileSync('./registro autos.json', updateCar, 'utf-8')
        }
    }
    

