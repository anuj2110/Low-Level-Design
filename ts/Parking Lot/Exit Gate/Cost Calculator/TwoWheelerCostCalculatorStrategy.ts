import { HourlyPricingStrategy } from "../Pricing Strategy/HourlyPricingStrategy";
import CostCalculator from "./CostCalculator";

export class TwoWheelerCostCalculator extends CostCalculator{
    constructor(){
        super(new HourlyPricingStrategy())
    }
}