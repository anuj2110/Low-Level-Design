import VehicleData from "../types/vehicleDataType";
import { Vehicle } from "../vehicle/Vehicle";

export default class VehicleInventoryManagement {
  vehicleMap: { [id: string]: Vehicle };

  constructor() {
    this.vehicleMap = {};
  }

  createVehicle(vehicle: Vehicle) {
    this.vehicleMap[vehicle.getVehicleId()] = vehicle;
  }

  updateVehicle(id: string, vehicleData: VehicleData) {
    this.vehicleMap[id].setVehicleInfo(vehicleData);
  }

  getVehicleById(id: string) {
    return this.vehicleMap[id];
  }

  getVehicles() {
    return Object.keys(this.vehicleMap).map((vehicle) => vehicle);
  }

  deleteVehicle(id: string) {
    delete this.vehicleMap[id];
  }
}
