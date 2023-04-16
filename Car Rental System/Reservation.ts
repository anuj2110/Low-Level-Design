import Location from "./Location";
import User from "./User";
import { Vehicle } from "./vehicle/Vehicle";
import crypto from "crypto";

export default class Reservation {
  private id: string;
  user: User;
  vehicle: Vehicle;
  bookingDate: Date;
  endDate: Date;
  pickupLocation: Location;
  dropOffLocaton: Location;
  status: ReservationStatus;

  constructor(
    user: User,
    vehicle: Vehicle,
    bookingDate: Date,
    endDate: Date,
    pickupLocation: Location,
    dropoffLocation: Location,
    status: ReservationStatus
  ) {
    (this.user = user),
      (this.vehicle = vehicle),
      (this.bookingDate = bookingDate);
    this.pickupLocation = pickupLocation;
    (this.dropOffLocaton = dropoffLocation),
      (this.status = status),
      (this.endDate = endDate);
    this.id = crypto.randomBytes(4).toString("hex");
  }

  updateReservation(
    user: User | null,
    vehicle: Vehicle | null,
    bookingDate: Date,
    endDate: Date | null,
    pickupLocation: Location | null,
    dropoffLocation: Location | null,
    status: ReservationStatus | null
  ) {
    this.user = user !== null ? user : this.user;
    this.vehicle = vehicle !== null ? vehicle : this.vehicle;
    this.bookingDate = bookingDate !== null ? bookingDate : this.bookingDate;
    this.endDate = endDate !== null ? endDate : this.endDate;
    this.pickupLocation =
      pickupLocation !== null ? pickupLocation : this.pickupLocation;
    this.dropOffLocaton =
      dropoffLocation !== null ? dropoffLocation : this.dropOffLocaton;
    this.status = status !== null ? status : this.status;
  }

  getReservation() {
    return {
      id: this.id,
      user: this.user,
      bookingDate: this.bookingDate,
      endDate: this.endDate,
      vehicle: this.vehicle,
      pickupLocation: this.pickupLocation,
      dropOffLocation: this.dropOffLocaton,
      status: this.status,
    };
  }
}
