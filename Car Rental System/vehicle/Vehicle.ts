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

  constructor(
    id: string,
    vehicleNumber: string,
    cc: number,
    kilometersDriven: number,
    type: VehicleEnum,
    status: VehicleStatus,
    isEngaged: boolean
  ) {
    (this.id = id), (this.vehicleNumber = vehicleNumber);
    this.cc = cc;
    this.kilometersDriven = kilometersDriven;
    this.type = type;
    this.status = status;
    this.isEngaged = isEngaged;
  }

  checkVehicleEngaged() {
    return this.isEngaged;
  }

  changeVehicleUsage(vehicleInUse: boolean) {
    this.isEngaged = vehicleInUse;
  }

  getVehicleInfo() {
    return {
      id: this.id,
      vehicleNumber: this.vehicleNumber,
      type: this.type,
      status: this.status,
      engaged: this.isEngaged,
    };
  }

  setVehicleInfo(
    cc: number | null,
    kilometersDriven: number | null,
    status: VehicleStatus | null
  ) {
    this.cc = cc !== null ? cc : this.cc;
    this.kilometersDriven =
      kilometersDriven !== null ? kilometersDriven : this.kilometersDriven;
    this.status = status !== null ? status : this.status;
  }
}
