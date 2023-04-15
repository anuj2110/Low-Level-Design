import ParkingSpot from "../ParkingSpot/ParkingSpot";
import Vehicle from "../Vehicle";

export default class ParkingSpotManager{
    parkingSpots: ParkingSpot[]

    constructor(parkingSpots:ParkingSpot[]){
        this.parkingSpots = parkingSpots
    }

    findParkingSpace(){
        let emptySpotIndex = -1
        for(let i=0;i<this.parkingSpots.length;i++){
            if(this.parkingSpots[i].returnIsEmpty()){
                emptySpotIndex = i
                return emptySpotIndex
            }
        }

        if(emptySpotIndex==-1){
            console.log('All spaces full')
        
        }
        return emptySpotIndex
    }

    parkVehicle(vehicle:Vehicle){
        let indexOfSpot = this.findParkingSpace()
        let parkingSpot = this.parkingSpots[indexOfSpot]
        parkingSpot.setVehicle(vehicle)
        parkingSpot.changeAvailability(false)
        return parkingSpot
    }

    removeVehicle(parkingSpot:ParkingSpot){
        let parkingSpotIndex = this.parkingSpots.indexOf(parkingSpot)
        this.parkingSpots[parkingSpotIndex].setVehicle(null)
        this.parkingSpots[parkingSpotIndex].changeAvailability(true)
    }

}