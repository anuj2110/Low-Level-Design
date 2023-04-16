import Reservation from "./Reservation";
import { generateId } from "./helpers";

export default class Bill {
  reservation: Reservation;
  id: string;
  isPaid: boolean = false;

  constructor(reservation: Reservation, isPaid: boolean) {
    this.id = generateId();
    this.isPaid = isPaid;
    this.reservation = reservation;
  }

  updateBill(reservation: Reservation | null, isPaid: boolean | null) {
    this.reservation = reservation !== null ? reservation : this.reservation;
    this.isPaid = isPaid !== null ? isPaid : this.isPaid;
  }

  getBill() {
    return {
      id: this.id,
      reservation: this.reservation.getReservation(),
      isPaid: this.isPaid,
    };
  }
}
