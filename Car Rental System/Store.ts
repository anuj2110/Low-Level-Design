import { generateId } from "./helpers";
import VehicleData from "./types/vehicleDataType";
import { Vehicle } from "./vehicle/Vehicle";
import VehicleInventoryManagement from "./vehicleInventoryManangement/VehicleInventoryManagement";

export default class Store {
  //TODO: Complete this class
  private id: string;
  inventory: VehicleInventoryManagement;

  constructor() {
    this.id = generateId();
    this.inventory = new VehicleInventoryManagement();
  }

  addVehicleToInventory(vehicle: Vehicle) {
    this.inventory.createVehicle(vehicle);
  }
}
