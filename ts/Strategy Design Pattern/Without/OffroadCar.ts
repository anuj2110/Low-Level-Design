import { Vehicle } from "./Vehicle";

export class OffroadCar extends Vehicle{
    drive(): void {
        console.log('Special Drive')
    }
}