import { CasinoGames } from "./casinoGames";

enum type {
    a = 'Virtual',
    b = 'Mechanic'
}

enum level {
    a = 'Type A: Recreational',
    b = 'Type B: Programmed Prize',
    c = 'Type C: Chance'
}

export class SlotMachine extends CasinoGames{
    private type: type;
    private level: level;

    constructor(id: number, brand: string, type: type, level: level) {
        super(id, brand);
        this.type = type;
        this.level = level
    }

    getInfo() {
        return this
    }
}