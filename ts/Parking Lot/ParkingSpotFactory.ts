import { FourWheelerParkingSpotManager } from "./ParkingSpotManager/FourWheelerParkingSpotManager";
import { TwoWheelerParkingSpotManager } from "./ParkingSpotManager/TwoWheelerParkingSpotManager";
import VehicleType from "./VehicleType";

export default class ParkingSpotFactory {
  fourWheelerParkingSpotManager: FourWheelerParkingSpotManager | null = null;
  twoWheelerParkingSpotManager: TwoWheelerParkingSpotManager | null = null;
  getParkingSpotManager(vehicleType: VehicleType) {
    switch (vehicleType) {
      case VehicleType.FOUR_WHEELER:
        this.fourWheelerParkingSpotManager =
          this.fourWheelerParkingSpotManager === null
            ? new FourWheelerParkingSpotManager(400)
            : this.fourWheelerParkingSpotManager;
        return this.fourWheelerParkingSpotManager;
      case VehicleType.TWO_WHEELER:
        this.twoWheelerParkingSpotManager =
          this.twoWheelerParkingSpotManager === null
            ? new TwoWheelerParkingSpotManager(400)
            : this.twoWheelerParkingSpotManager;
        return this.twoWheelerParkingSpotManager;
      default:
        console.log("Wrong type");
        break;
    }
    return null
  }
}
