import Vehicle from "../Vehicle";
import crypto from "crypto";
export default class ParkingSpot {
  private id: string;
  isEmpty: boolean;
  vehicle: Vehicle | null;
  price: number;

  constructor(price: number | null) {
    this.price = price ? price : 100;
    this.isEmpty = true;
    this.vehicle = null;
    this.id = crypto.randomBytes(4).toString("hex");
  }

  getVehicle(): Vehicle | null {
    return this.vehicle;
  }

  setVehicle(vehicle: Vehicle|null) {
    this.vehicle = vehicle;
  }

  returnIsEmpty(): boolean {
    return this.isEmpty;
  }

  getPrice() {
    return this.price;
  }

  setPrice(price: number) {
    this.price = price;
  }

  changeAvailability(isEmpty:boolean) {
    this.isEmpty = isEmpty
  }
}
