import PricingStrategy from "../Pricing Strategy/PricingStrategy";

export default class CostCalculator{
    pricingStrategy:PricingStrategy

    constructor(pricingStrategy:PricingStrategy){
        this.pricingStrategy = pricingStrategy
    }

    calculatePrice(startTime:Date,endTime:Date,price:number){
        return this.pricingStrategy.price(startTime,endTime,price)
    }
}