import { Drive } from "./Drive";

export class SpecialDrive implements Drive{
    drive(): void {
        console.log('special Drive')
    }
}