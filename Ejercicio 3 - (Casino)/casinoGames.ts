import { RouletteTable } from "./rouletteTable";
import { SlotMachine } from "./slotMachine";

export class CasinoGames {
    private id: number;
    private brand: string;
    
    constructor(id: number, brand: string) {
        this.id = id;
        this.brand = brand;
    }

    getInfo() {
        return this
    }
}