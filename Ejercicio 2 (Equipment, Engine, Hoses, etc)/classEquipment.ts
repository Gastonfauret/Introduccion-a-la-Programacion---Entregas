import { Pump } from "./subClassPump";
import { Engine } from "./subClassEngine";
import { Hoses } from "./subClassHoses";
import { Electric } from "./subClassElectric";
import * as fs from "fs";

const equipment: Equipment [] = [];

export class Equipment {
    private id: string;
    private description: string;
    private dateManufacture: Date;
    private dateInstallation: Date;
    private pump: Pump;
    private engine: Engine; 
    private hoses: Hoses;  
    
    constructor(id: string, description: string, dateManufacture: Date, dateInstallation: Date, pump: Pump, engine: Engine, hoses: Hoses) {
        this.id = id;
        this.description = description;
        this.dateManufacture = dateManufacture;
        this.dateInstallation = dateInstallation
        this.pump = pump;
        this.engine = engine;
        this.hoses = hoses;
    }

    consultEquipment(id:string, equipment: Equipment[]) { 
        let foundId: Equipment[] = equipment.filter((file: any) => file.id === id); 
        if (foundId.length) {
            console.log(`The Id: ${this.id} was found in data base.`)
            console.log(foundId);
            ;
        } else {
            console.log(`The Id: ${id} couldn't be found in data base`);            
        }     
    }

    addEquipment(equipment, newEquipment: Equipment) {
        if (equipment.push(newEquipment)) {
            console.log(`The new equipment has been successfully added.`, newEquipment);
        } else {
            console.log(`The new equipment couldn't be added.`);
        }
    }

    editEquipment(id: string, equipment, data: string) {
        equipment.map(function(element) { 
            if(element.id === id) {
                element.id = data; 
                console.log(`The id ${id} has been modified. The new id its ${data}`);
                } 
            }        
        )
    }

    deleteEquipment(id: string, equipment){
        let index: number = equipment.length;
        while (index > 0) {
            const deleteId: number = equipment.findIndex((element: any) => element.id === id);
            if (deleteId >= 0) {
                equipment.splice(deleteId, 1);
                console.log(`The Id: '${id}' has been deleted sucesfully.`);                
            }
        index--;
        }
    }

    arrayAJason(equipment) {
        const updateEquipment = JSON.stringify(equipment);
        fs.writeFileSync('./equipmentFile.json', updateEquipment, 'utf-8')
    }
}