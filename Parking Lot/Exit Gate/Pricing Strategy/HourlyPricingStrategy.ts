import PricingStrategy from "./PricingStrategy";

export class HourlyPricingStrategy implements PricingStrategy {
  price(startTime: Date, endTime: Date, spotPrice: number): number {
    let diff: number =
      (endTime.getTime() - startTime.getTime()) / (1000 * 3600);
    return diff < 1 ? spotPrice : Math.floor(spotPrice * diff);
  }
}
