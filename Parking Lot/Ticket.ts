import ParkingSpot from "./ParkingSpot/ParkingSpot";
import Vehicle from "./Vehicle";

export default class Ticket {
  parkingSpot: ParkingSpot;
  vehicle: Vehicle;
  entryTime: Date;

  constructor(parkingSpot: ParkingSpot, vehicle: Vehicle) {
    this.parkingSpot = parkingSpot;
    this.vehicle = vehicle;
    this.entryTime = new Date();
  }

  getParkingSpot() {
    return this.parkingSpot;
  }
  getVehicle() {
    return this.vehicle;
  }
  getEntryTime() {
    return this.entryTime;
  }
}
