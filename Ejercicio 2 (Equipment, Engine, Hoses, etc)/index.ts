import { Equipment} from "./classEquipment";
import { Pump } from "./subClassPump";
import { Hoses } from "./subClassHoses";
import { Engine } from "./subClassEngine";
import { Electric } from "./subClassElectric";
import { Fuel } from "./subClassFuel"
import * as fs from "fs";

const date = new Date();
let equipment: Equipment [] = [];

try {
    const data:string = fs.readFileSync('./equipmentFile.json', "utf8");
    let concess = JSON.parse(data);
    equipment = concess.map((car:{}) => car);
} catch (error) {
    let errorMessage = "No se ha podido acceder al archivo de texto";
    fs.writeFileSync("./error.txt", errorMessage, "utf8");
}

enum Level {
    low = 'Low',
    regular = 'Regular',
    good = 'Good',
    veryGood = 'Very Good',
    excelent = 'Excelent'
}

enum Materials {
    plastic = 'Plastic',
    iron = 'Iron',
    wood = 'Wood'
}

const electric = new Electric('0001', 200, 100, true); 
const fuel = new Fuel('0003', 4, 1)
const pump = new Pump('0002', 100, 200, 'ARG Hoses Inc');
const engine = new Engine('0004', 20, Level.good, 'ARG Motors Inc.', electric, fuel);
const hoses = new Hoses('0005', 4, 12, Materials.plastic);

const motor = new Equipment('001', 'Motor', date, date, pump, engine, hoses);
motor.addEquipment(equipment, motor);
const updatedEquipment = motor.arrayAJason(equipment)

console.log(updatedEquipment);


