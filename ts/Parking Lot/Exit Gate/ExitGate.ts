import Ticket from "../Ticket";
import CostCalculatorFactory from "./Cost Calculator/CostCalculatorFactory";

export default class ExitGate {
  history: { ticket: Ticket; price: number }[];
  constructor() {
    this.history = [];
  }
  createCheckOut(ticket: Ticket, endTime: Date) {
    const costCalculator = CostCalculatorFactory.getCostCalculator(
      ticket.getVehicle().getVehicleType()
    );
    const price = costCalculator.calculatePrice(
      ticket.getEntryTime(),
      endTime,
      ticket.getParkingSpot().getPrice()
    );
    this.history.push({ ticket, price });
    return price;
  }
}
