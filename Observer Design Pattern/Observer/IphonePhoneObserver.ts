import StockObservableInterface from "../Observable/StockObservableInterface";
import StockObserverInterface from "./StockObserverInterface";

export default class IphonePhoneObserver implements StockObserverInterface {
  private observable: StockObservableInterface;
  private phone: string;
  constructor(phone: string, observable: StockObservableInterface) {
    this.phone = phone;
    this.observable = observable;
  }
  update(): void {
    this.sendMessage();
  }

  private sendMessage(): void {
    console.log(`message sent to: ${this.phone}`);
  }
}
