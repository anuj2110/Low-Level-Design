from abc import ABC,abstractmethod

class CoffeeInterface(ABC):

    @abstractmethod
    def calculate_total(self):
        pass