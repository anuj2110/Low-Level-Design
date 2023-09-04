import { Drive } from "./Drive";

export class NormalDrive implements Drive{
    drive(): void {
        console.log('normal Drive')
    }
}