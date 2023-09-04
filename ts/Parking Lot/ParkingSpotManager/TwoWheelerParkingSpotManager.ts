import ParkingSpot from "../ParkingSpot/ParkingSpot";
import ParkingSpotManager from "./ParkingSpotManager";

export class TwoWheelerParkingSpotManager extends ParkingSpotManager {
  constructor(numberOfParkingSpots: number) {
    let parkingSpots: ParkingSpot[] = [];
    for (let i = 0; i < numberOfParkingSpots; i++) {
      parkingSpots.push(new ParkingSpot(200));
    }
    super(parkingSpots);
  }
}
