import { Vehicle } from "./Vehicle";

export class SportsCar extends Vehicle{
    drive(): void {
        console.log('Special Drive')
    }
}