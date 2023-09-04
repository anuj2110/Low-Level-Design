import VehicleType from "../../VehicleType";
import { FourWheelerCostCalculator } from "./FourWheelerCostCalculator";
import { TwoWheelerCostCalculator } from "./TwoWheelerCostCalculatorStrategy";

export default class CostCalculatorFactory{
    static getCostCalculator(vehicleType:VehicleType){
        switch(vehicleType){
            case VehicleType.FOUR_WHEELER:
                return new FourWheelerCostCalculator()
            case VehicleType.TWO_WHEELER:
                return new TwoWheelerCostCalculator()
        }
    }
}