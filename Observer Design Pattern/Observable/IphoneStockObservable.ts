import StockObserverInterface from "../Observer/StockObserverInterface";
import StockObservableInterface from "./StockObservableInterface";
export default class IphoneStockObservable implements StockObservableInterface{
    private stock:number;
    private observerList:StockObserverInterface[];
    constructor(){
        this.stock = 0;
        this.observerList = [];
    }
    add(observer:StockObserverInterface): void {
        this.observerList.push(observer)
    }
    remove(observer:StockObserverInterface): void {
        let index = this.observerList.indexOf(observer)
        if(index==-1) return 
        this.observerList.splice(index,1);
    }

    notifySubscribers(): void {
        for(const observer of this.observerList){
            observer.update();
        }
    }

    setStockCount(stockAdded: number): void {
        if(this.stock===0){
            this.notifySubscribers();
        }
        this.stock+=stockAdded
    }

    getStockCount(): number {
        return this.stock
    }
    reset(): void {
        this.stock = 0;
    }
}
