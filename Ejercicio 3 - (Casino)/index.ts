import { Casino } from "./casino";
import { CasinoGames } from "./casinoGames";
import { RouletteTable } from "./rouletteTable";
import { SlotMachine } from "./slotMachine";



enum type {
    a = 'Virtual',
    b =  'Mechanic'
}

enum level {
    a = 'Type A: Recreational',
    b = 'Type B: Programmed Prize',
    c = 'Type C: Chance'
}

const casinoGames01 = new CasinoGames(3456, 'Casinos Games Room');
console.log(casinoGames01.getInfo());

const slotMachine01 = new SlotMachine(1234, 'ARG Machines Inc.', type.b, level.c);
console.log(slotMachine01.getInfo());

const rouletteTable01 = new RouletteTable(2345, 'ARG Rouletts Inc.', type.a);
console.log(rouletteTable01.getInfo());

const casino01 = new Casino('Barts Casino', true, slotMachine01, rouletteTable01);
console.log(casino01.getInfo());

