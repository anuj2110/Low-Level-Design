import LocationData from "./Location";
import ReservationStatus from "./ReservationStatus";
import Store from "./Store";
import User from "./User";
import RentBasis from "./vehicle/RentBasis";
import VehicleEnum from "./vehicle/VehiclEnum";
import { Vehicle } from "./vehicle/Vehicle";
import VehicleStatus from "./vehicle/VehicleStatus";

function main() {
  const stores = [
    new Store(new LocationData("Bangalore")),
    new Store(new LocationData("New Delhi")),
  ];
  const users = [
    new User("Anuj", "DL238624fjdsi"),
    new User("Gunjan", "DL273489hfusd"),
  ];
  stores[0].addVehicleToInventory(
    new Vehicle(
      "DL10CQ8921",
      120,
      1000,
      VehicleEnum.CAR,
      VehicleStatus.ACTIVE,
      false,
      900,
      RentBasis.Daily
    )
  );
  stores[1].addVehicleToInventory(
    new Vehicle(
      "DL10CQ9012",
      100,
      800,
      VehicleEnum.CAR,
      VehicleStatus.ACTIVE,
      false,
      1000,
      RentBasis.Daily
    )
  );

  const vehicleBangaloreId = stores[0].getVehicles()[0];
  let reservation = stores[0].makeReservation(
    users[0],
    vehicleBangaloreId,
    new Date(),
    new Date(Date.now() + 86400 * 3 * 1000),
    new LocationData("Mangalore"),
    new LocationData("Bangalore")
  );
  console.log(reservation);

  reservation = stores[0].updateReservation(reservation.id, {
    user: null,
    vehicle: null,
    bookingDate: null,
    endDate: null,
    pickupLocation: null,
    dropOffLocation: null,
    status: ReservationStatus.Completed,
  });

  console.log(reservation)
}

main();
