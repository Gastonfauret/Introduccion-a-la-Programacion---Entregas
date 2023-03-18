import { Equipment } from "./classEquipment";
import { Engine } from "./subClassEngine";
import { Hoses } from "./subClassHoses";

export class Pump {
    private id: string;
    private inletFlow: number;
    private outpuFlow: number;
    private manufacturer: string

    constructor (id: string, inletFlow: number, outpuFlow: number, manufacturer: string) {
        this.id = id;
        this.inletFlow = inletFlow;
        this.outpuFlow = outpuFlow;
        this.manufacturer = manufacturer;    
    }
}