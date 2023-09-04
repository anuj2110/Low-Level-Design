from implementations.ConcreteObserver import ConcreteObserver1,ConcreteObserver2
from implementations.ConcreteSubject import ConcreteSubject

cs = ConcreteSubject()

co1 = ConcreteObserver2(cs)
co2 = ConcreteObserver1(cs)

cs.registerObserver(co1)
cs.registerObserver(co2)

cs.state=1
cs.notify()

cs.state=4
cs.notify()