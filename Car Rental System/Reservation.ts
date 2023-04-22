import LocationData from "./Location";
import ReservationStatus from "./ReservationStatus";
import User from "./User";
import { generateId } from "./helpers";
import ReservationData from "./types/reservationDataType";
import { Vehicle } from "./vehicle/Vehicle";

export default class Reservation {
  private id: string;
  user: User;
  vehicle: Vehicle;
  bookingDate: Date;
  endDate: Date;
  pickupLocation: LocationData;
  dropOffLocation: LocationData;
  status: ReservationStatus;

  constructor(
    user: User,
    vehicle: Vehicle,
    bookingDate: Date,
    endDate: Date,
    pickupLocation: LocationData,
    dropoffLocation: LocationData,
    status: ReservationStatus
  ) {
    (this.user = user),
      (this.vehicle = vehicle),
      (this.bookingDate = bookingDate);
    this.pickupLocation = pickupLocation;
    (this.dropOffLocation = dropoffLocation),
      (this.status = status),
      (this.endDate = endDate);
    this.id = generateId();
  }

  updateReservation(reservationData: ReservationData) {
    this.user =
      reservationData.user !== null ? reservationData.user : this.user;
    this.vehicle =
      reservationData.vehicle !== null ? reservationData.vehicle : this.vehicle;
    this.bookingDate =
      reservationData.bookingDate !== null
        ? reservationData.bookingDate
        : this.bookingDate;
    this.endDate =
      reservationData.endDate !== null ? reservationData.endDate : this.endDate;
    this.pickupLocation =
      reservationData.pickupLocation !== null
        ? reservationData.pickupLocation
        : this.pickupLocation;
    this.dropOffLocation =
      reservationData.dropOffLocation !== null
        ? reservationData.dropOffLocation
        : this.dropOffLocation;
    this.status =
      reservationData.status !== null ? reservationData.status : this.status;
  }

  getReservation() {
    return {
      id: this.id,
      user: this.user,
      bookingDate: this.bookingDate,
      endDate: this.endDate,
      vehicle: this.vehicle,
      pickupLocation: this.pickupLocation,
      dropOffLocation: this.dropOffLocation,
      status: this.status,
    };
  }
}
