import StockObservableInterface from "../Observable/StockObservableInterface";
import StockObserverInterface from "./StockObserverInterface";

export default class IphoneMailObserver implements StockObserverInterface {
  private observable: StockObservableInterface;
  private email: string;
  constructor(email: string, observable: StockObservableInterface) {
    this.email = email;
    this.observable = observable;
  }
  update(): void {
    this.sendMail();
  }

  private sendMail(): void {
    console.log(`mail sent to: ${this.email}`);
  }
}
