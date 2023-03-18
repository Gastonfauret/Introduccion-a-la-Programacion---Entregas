import { Equipment } from "./classEquipment";
import { Pump } from "./subClassPump";
import { Engine } from "./subClassEngine";

enum Materials {
    Plastic,
    Iron,
    Wood
}

export class Hoses {
    private id: string;
    private elements: number;
    private size: number;
    private threadMaterial: Materials;
    constructor (id: string, elements: number, size: number, threadMaterial: Materials) { 
        this.id = id;       
        this.elements = elements;
        this.size = size,
        this.threadMaterial = threadMaterial;
    }
}