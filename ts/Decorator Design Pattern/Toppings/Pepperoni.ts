import BasePizza from "../Pizzas/BasePizzaClass";
import ToppingsDecorator from "./ToppingDecorator";

export default class Pepperoni extends ToppingsDecorator{
    basePizza:BasePizza
    constructor(pizza:BasePizza){
        super()
        this.basePizza = pizza
    }
    price(): number {
        return this.basePizza.price()+300;
    }
}