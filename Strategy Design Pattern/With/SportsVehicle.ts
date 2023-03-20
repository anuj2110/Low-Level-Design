import { SpecialDrive } from "./strategies/SpecialDrive";
import { Vehicle } from "./Vehicle";

export class SportsCar extends Vehicle{
    constructor(){
        super(new SpecialDrive())
    }
}