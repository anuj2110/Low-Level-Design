import LocationData from "./Location";
import Reservation from "./Reservation";
import User from "./User";
import { generateId } from "./helpers";
import ReservationData from "./types/reservationDataType";
import VehicleData from "./types/vehicleDataType";
import { Vehicle } from "./vehicle/Vehicle";
import VehicleInventoryManagement from "./vehicleInventoryManangement/VehicleInventoryManagement";
import ReservationStatus from "./ReservationStatus";
export default class Store {
  private id: string;
  location: LocationData;
  inventory: VehicleInventoryManagement;
  reservations: { [key: string]: Reservation };
  constructor(location: LocationData) {
    this.id = generateId();
    this.inventory = new VehicleInventoryManagement();
    this.reservations = {};
    this.location = location;
  }

  addVehicleToInventory(vehicle: Vehicle) {
    this.inventory.createVehicle(vehicle);
  }

  removeVehicleFromInventory(id: string) {
    this.inventory.deleteVehicle(id);
  }

  updateVehicleInInventory(id: string, vehicleData: VehicleData) {
    this.inventory.updateVehicle(id, vehicleData);
  }

  getVehicleFromInventory(id: string) {
    return this.inventory.getVehicleById(id);
  }

  getVehicles() {
    return this.inventory.getVehicles();
  }

  makeReservation(
    user: User,
    id: string,
    bookingDate: Date,
    endDate: Date,
    pickupLocation: LocationData,
    dropOffLocation: LocationData,
    status: ReservationStatus = ReservationStatus.Scheduled
  ) {
    this.inventory.updateVehicle(id, {
      vehicleNumber: null,
      type: null,
      status: null,
      engaged: true,
      rent: null,
      basis: null,
      cc: null,
      kilometersDriven: null,
    });
    const vehicle = this.getVehicleFromInventory(id);
    let newReservation = new Reservation(
      user,
      vehicle,
      bookingDate,
      endDate,
      pickupLocation,
      dropOffLocation,
      status
    );
    this.reservations = {
      ...this.reservations,
      [newReservation.getReservation().id]: newReservation,
    };
    return newReservation.getReservation();
  }

  updateReservation(id: string, reservationData: ReservationData) {
    const reservation = this.reservations[id];
    reservation.updateReservation(reservationData);
    if (
      reservationData.status === ReservationStatus.Completed ||
      reservationData.status === ReservationStatus.Cancelled
    ) {
      this.updateVehicleInInventory(reservation.vehicle.getVehicleId(), {
        vehicleNumber: null,
        status: null,
        basis: null,
        type: null,
        cc: null,
        rent: null,
        kilometersDriven: null,
        engaged: false,
      });
    }
    return reservation.getReservation()
  }

  getReservation(id: string) {
    return this.reservations[id];
  }
}
