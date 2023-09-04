from abc import ABC,abstractmethod

class Subject(ABC):

    @abstractmethod
    def registerObserver(self,observer):
        pass
    
    @abstractmethod
    def unRegisterObserver(self,observer):
        pass

    @abstractmethod
    def notify(self):
        pass
