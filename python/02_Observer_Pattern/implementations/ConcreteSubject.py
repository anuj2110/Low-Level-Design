from interfaces.subject import Subject

class ConcreteSubject(Subject):
    def __init__(self):
        self._state = 0
        self.__observers = []

    @property
    def state(self):
        return self._state

    @state.setter
    def state(self,val):
        self._state = val

    def registerObserver(self, observer):
        self.__observers.append(observer)
    
    def unRegisterObserver(self,observer):
        self.__observers.remove(observer)
    
    def notify(self):
        for observer in self.__observers:
            observer.update()