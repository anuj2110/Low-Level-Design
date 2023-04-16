import RentBasis from "./RentBasis";
import VehicleEnum from "./VehiclEnum";
import VehicleStatus from "./VehicleStatus";
import crypto from 'crypto'

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
    id: string,
    vehicleNumber: string,
    cc: number,
    kilometersDriven: number,
    type: VehicleEnum,
    status: VehicleStatus,
    isEngaged: boolean,
    rent: number,
    basis: RentBasis
  ) {
    this.id = crypto.randomBytes(4).toString('hex')
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

  getVehicleId(){
    return this.id
  }

  getVehicleInfo() {
    return {
      id: this.id,
      vehicleNumber: this.vehicleNumber,
      type: this.type,
      status: this.status,
      engaged: this.isEngaged,
      rent: this.rent,
      basis: this.basis,
    };
  }

  setVehicleInfo(
    cc: number | null,
    kilometersDriven: number | null,
    status: VehicleStatus | null,
    basis: RentBasis | null,
    rent: number | null
  ) {
    this.cc = cc !== null ? cc : this.cc;
    this.kilometersDriven =
      kilometersDriven !== null ? kilometersDriven : this.kilometersDriven;
    this.status = status !== null ? status : this.status;
    this.basis = basis !== null ? basis : this.basis;
    this.rent = rent !== null ? rent : this.rent;
  }
}
