import { Engine } from "./subClassEngine";
import { Equipment } from "./classEquipment";

enum fuelType {
    Oil,
    Gas,
    CompressAir,
    water
}

export class Fuel  {
    private id: string;
    private cylinders: fuelType;
    private fuelType: fuelType;
    constructor (id: string, cylinders: number, fuelType: fuelType) {
        this.id = id;
        this.cylinders = cylinders;
        this.fuelType = fuelType;     
    }
}