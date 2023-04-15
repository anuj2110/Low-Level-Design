import { HourlyPricingStrategy } from "../Pricing Strategy/HourlyPricingStrategy";
import CostCalculator from "./CostCalculator";

export class FourWheelerCostCalculator extends CostCalculator{
    constructor(){
        super(new HourlyPricingStrategy())
    }
}