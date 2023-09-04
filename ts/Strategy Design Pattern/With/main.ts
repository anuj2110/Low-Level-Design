import { NormalCar } from "./NormalVehicle";
import { SportsCar } from "./SportsVehicle";
import { Vehicle } from "./Vehicle";

const sportsCar:Vehicle = new SportsCar()
const normalCar:Vehicle = new NormalCar()

sportsCar.drive()
normalCar.drive()