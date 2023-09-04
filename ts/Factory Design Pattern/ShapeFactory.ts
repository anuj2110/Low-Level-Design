import { Circle } from "./shapes/Circle";
import { Rectangle } from "./shapes/Rectangle";

export default class ShapeFactory{
    static getShape(type:string){
        switch(type){
            case 'Rectangle':
                return new Rectangle()
            case 'Circle':
                return new Circle()
        }
    }
}