import { Engine } from "./subClassEngine";
import { Equipment } from "./classEquipment";
export class Electric {
    private id: string;
    private voltage: number;
    private consumptionKwH: number;
    private isLowConsumption: boolean
    
    constructor (id: string, voltage: number, consumptionKwH: number, isLowConsumption: boolean) {
        this.id = id;    
        this.voltage = voltage; 
        this.consumptionKwH = consumptionKwH; 
        this.isLowConsumption = isLowConsumption;    
    }   
}
