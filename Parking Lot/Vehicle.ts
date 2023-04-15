import VehicleType from "./VehicleType";

export default class Vehicle {
  vehicleNumber: string;
  vehicleType: VehicleType;
  constructor(vehicleNumber: string, vehicleType: VehicleType) {
    this.vehicleNumber = vehicleNumber;
    this.vehicleType = vehicleType;
  }

  getVehicleNumber() {
    return this.vehicleNumber;
  }

  getVehicleType() {
    return this.vehicleType;
  }
}
