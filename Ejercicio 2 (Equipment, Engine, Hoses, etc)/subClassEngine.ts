import { Equipment } from "./classEquipment";
import { Fuel } from "./subClassFuel";
import { Electric } from "./subClassElectric";
import { Hoses } from "./subClassHoses";
import { Pump } from "./subClassPump";

enum Level {
    low = 'Low',
    regular = 'Regular',
    good = 'Good',
    veryGood = 'Very Good',
    excelent = 'Excelent'
}

export class Engine {
    private id: string;
    private powerHP: number;
    private efficiency: Level
    private manufacturer: string
    private electric: Electric;
    private fuel: Fuel;

    constructor (id: string, powerHP: number, efficiency: Level, manufacturer: string, electric: Electric, fuel: Fuel) {
        this.id = id;
        this.powerHP = powerHP;
        this.efficiency = efficiency;
        this.manufacturer = manufacturer;
        this.electric = electric;
        this.fuel = fuel;
    }
}