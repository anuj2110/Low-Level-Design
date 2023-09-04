import Farmhouse from "./Pizzas/Farmhouse";
import Margherita from "./Pizzas/Margherita";
import ExtraCheese from "./Toppings/ExtraCheese";
import Pepperoni from "./Toppings/Pepperoni";

let pizza1 = new Margherita();
let pizza2 = new Farmhouse();

let combo1 = new ExtraCheese(new Pepperoni(new ExtraCheese(pizza1)));

let combo2 = new Pepperoni(new ExtraCheese(new Pepperoni(pizza2)));

console.log('Price of combo1 is', combo1.price()) //100+300+100+200
console.log('Price of combo2 is',combo2.price()) // 300+100+300+300

/* 
* This can also used in other real life cases where we want to add layers dynamically
*/