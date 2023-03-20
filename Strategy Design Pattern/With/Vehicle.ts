import { Drive } from "./strategies/Drive";

export class Vehicle {
    driveStrategy:Drive

    constructor(strategy:Drive){
        this.driveStrategy = strategy
    }
    drive():void{
        this.driveStrategy.drive()
    }
}