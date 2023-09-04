import BasePizza from "./BasePizzaClass";

export default class Margherita extends BasePizza{
    price(): number {
        return 200;
    }
}