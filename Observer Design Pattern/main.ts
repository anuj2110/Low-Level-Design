import IphoneStockObservable from "./Observable/IphoneStockObservable";
import IphoneMailObserver from "./Observer/IphoneMailObserver";
import IphonePhoneObserver from "./Observer/IphonePhoneObserver";

const observable = new IphoneStockObservable()
const email1 = new IphoneMailObserver('a@123.com',observable)
const phone = new IphonePhoneObserver('12312412',observable)
const email2 = new IphoneMailObserver('b@123.com',observable)

observable.add(email1)
observable.add(phone)
observable.add(email2)

observable.setStockCount(100)

/*
* This is to test the remove function working 
*/

observable.reset()

observable.remove(phone)

observable.setStockCount(10)