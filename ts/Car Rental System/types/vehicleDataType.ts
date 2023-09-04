import VehicleType from "../../Parking Lot/VehicleType"
import User from "../User"
import RentBasis from "../vehicle/RentBasis"
import VehicleStatus from "../vehicle/VehicleStatus"

type VehicleData = {
    id?: string,
    vehicleNumber: string|null,
    type: VehicleType|null,
    status: VehicleStatus|null,
    engaged: boolean|null,
    rent: number|null,
    basis: RentBasis|null,
    cc:number|null,
    kilometersDriven:number|null
}

export default VehicleData