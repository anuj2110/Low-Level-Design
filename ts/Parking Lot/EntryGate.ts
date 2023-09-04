import ParkingSpot from "./ParkingSpot/ParkingSpot";
import ParkingSpotFactory from "./ParkingSpotFactory";
import ParkingSpotManager from "./ParkingSpotManager/ParkingSpotManager";
import Ticket from "./Ticket";
import Vehicle from "./Vehicle";

export default class EntryGate {
  parkingSpotManager: ParkingSpotManager | null;
  parkingSpotFactory: ParkingSpotFactory;

  constructor() {
    this.parkingSpotFactory = new ParkingSpotFactory();
    this.parkingSpotManager = null;
  }

  bookVehicle(vehicle: Vehicle) {
    this.parkingSpotManager = this.parkingSpotFactory.getParkingSpotManager(
      vehicle.getVehicleType()
    );
    if (this.parkingSpotManager === null) {
      console.log("cannot park vehicle here");
      return;
    }

    const parkingSpot = this.parkingSpotManager?.parkVehicle(
      vehicle
    ) as ParkingSpot;
    if (!parkingSpot) {
      console.log("Sorry not empty space here");
      return;
    }
    return this.generateTicket(vehicle, parkingSpot);
  }

  generateTicket(vehicle: Vehicle, parkingSpot: ParkingSpot) {
    return new Ticket(parkingSpot, vehicle);
  }
}
