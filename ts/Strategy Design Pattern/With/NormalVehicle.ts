import { NormalDrive } from "./strategies/NormalDrive";
import { Vehicle } from "./Vehicle";

export class NormalCar extends Vehicle{
    constructor(){
        super(new NormalDrive())
    }
}