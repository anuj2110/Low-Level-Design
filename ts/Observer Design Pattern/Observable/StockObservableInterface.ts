import StockObserverInterface from "../Observer/StockObserverInterface"

export default interface StockObservableInterface{
    add(observer:StockObserverInterface):void
    remove(observer:StockObserverInterface):void
    notifySubscribers():void
    setStockCount(stockAdded:number):void
    getStockCount():number
    reset():void
};