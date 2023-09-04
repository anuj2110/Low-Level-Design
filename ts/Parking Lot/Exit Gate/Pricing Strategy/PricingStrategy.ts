export default interface PricingStrategy{
    price(startTime:Date,endTime:Date,spotPrice:number):number;
}