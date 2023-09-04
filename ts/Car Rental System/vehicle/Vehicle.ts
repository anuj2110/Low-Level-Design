import { generateId } from "../helpers";
import VehicleData from "../types/vehicleDataType";
import RentBasis from "./RentBasis";
import VehicleEnum from "./VehiclEnum";
import VehicleStatus from "./VehicleStatus";

export class Vehicle {
  private id: string;
  private vehicleNumber: string;
  cc: number;
  kilometersDriven: number;
  type: VehicleEnum;
  status: VehicleStatus;
  isEngaged: boolean;
  rent: number;
  basis: RentBasis;

  constructor(
    vehicleNumber: string,
    cc: number,
    kilometersDriven: number,
    type: VehicleEnum,
    status: VehicleStatus,
    isEngaged: boolean,
    rent: number,
    basis: RentBasis
  ) {
    this.id = generateId();
    this.vehicleNumber = vehicleNumber;
    this.cc = cc;
    this.kilometersDriven = kilometersDriven;
    this.type = type;
    this.status = status;
    this.isEngaged = isEngaged;
    this.rent = rent;
    this.basis = basis;
  }

  checkVehicleEngaged() {
    return this.isEngaged;
  }

  changeVehicleUsage(vehicleInUse: boolean) {
    this.isEngaged = vehicleInUse;
  }

  getVehicleId() {
    return this.id;
  }

  getVehicleInfo() {
    return {
      id: this.id,
      vehicleNumber: this.vehicleNumber,
      cc: this.cc,
      kilometers: this.kilometersDriven,
      type: this.type,
      status: this.status,
      engaged: this.isEngaged,
      rent: this.rent,
      basis: this.basis,
    };
  }

  setVehicleInfo(vehicleData: VehicleData) {
    this.cc = vehicleData.cc !== null ? vehicleData.cc : this.cc;
    this.kilometersDriven =
      vehicleData.kilometersDriven !== null
        ? vehicleData.kilometersDriven
        : this.kilometersDriven;
    this.status =
      vehicleData.status !== null ? vehicleData.status : this.status;
    this.basis = vehicleData.basis !== null ? vehicleData.basis : this.basis;
    this.rent = vehicleData.rent !== null ? vehicleData.rent : this.rent;
    this.isEngaged =
      vehicleData.engaged !== null ? vehicleData.engaged : this.isEngaged;
  }
}
