import { RouletteTable } from "./rouletteTable";
import { SlotMachine } from "./slotMachine";

export class Casino {
    private name: string;
    private openClosed: boolean;
    private slotMachine: SlotMachine;
    private rouletteTable: RouletteTable

    constructor(name: string, openClosed: boolean, slotMachine: SlotMachine, rouletteTable: RouletteTable) {
        this.name = name;
        this.openClosed = openClosed;
        this.slotMachine = slotMachine;
        this.rouletteTable = rouletteTable
    }

    getInfo() {
        return this
    }
}