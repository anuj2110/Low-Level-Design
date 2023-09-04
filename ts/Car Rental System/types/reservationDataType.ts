import LocationData from "../Location";
import ReservationStatus from "../ReservationStatus";
import User from "../User";
import { Vehicle } from "../vehicle/Vehicle";

type ReservationData = {
  user: User | null;
  vehicle: Vehicle | null;
  bookingDate: Date | null;
  endDate: Date | null;
  pickupLocation: LocationData | null;
  dropOffLocation: LocationData | null;
  status: ReservationStatus | null;
};

export default ReservationData;
