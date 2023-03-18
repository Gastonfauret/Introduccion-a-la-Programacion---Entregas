import { CasinoGames } from "./casinoGames";

enum type {
    a = 'Virtual',
    b = 'Mechanic'
}

export class RouletteTable extends CasinoGames{
    private type: type;

    constructor(id: number, brand: string, type: type,) {
        super(id, brand);
        this.type = type
    }
    
    getInfo() {
        return this
    }
}