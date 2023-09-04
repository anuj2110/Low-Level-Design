import EntryGate from "./EntryGate"
import ExitGate from "./Exit Gate/ExitGate"
import Ticket from "./Ticket"
import Vehicle from "./Vehicle"
import VehicleType from "./VehicleType"

function main(){
    const entryGate = new EntryGate()
    const exitGate = new ExitGate()

    const vehicle1 = new Vehicle('DL10CQ5931',VehicleType.FOUR_WHEELER)
    const vehicle2 = new Vehicle('DL9SBD1064',VehicleType.TWO_WHEELER)

    const ticket1 = entryGate.bookVehicle(vehicle1) as Ticket
    console.log(ticket1?.getVehicle().getVehicleNumber(),ticket1?.getEntryTime(),ticket1?.getParkingSpot().getPrice())
    const ticket2 = entryGate.bookVehicle(vehicle2) as Ticket
    console.log(ticket2?.getVehicle().getVehicleNumber(),ticket2?.getEntryTime(),ticket2?.getParkingSpot().getPrice())

    const price1 = exitGate.createCheckOut(ticket1,new Date(ticket1?.getEntryTime().getTime()+3600*6*1000))
    const price2 = exitGate.createCheckOut(ticket2,new Date(ticket2?.getEntryTime().getTime()+3600*4*1000))
    
    console.log(`Price for vehicle number: ${vehicle1.getVehicleNumber()} is ${price1}`) 
    console.log(`Price for vehicle number: ${vehicle2.getVehicleNumber()} is ${price2}`) 
    
}

main()