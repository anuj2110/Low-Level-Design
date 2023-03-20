import { NormalCar } from "./NormalCar";
import { OffroadCar } from "./OffroadCar";
import { SportsCar } from "./SportsCar";

const s = new SportsCar()
const o = new OffroadCar()
const n = new NormalCar()

s.drive()
n.drive()
o.drive()