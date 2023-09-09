from .coffee_inteface import CoffeeInterface
from abc import abstractmethod

class AddOnInterface(CoffeeInterface):
    _coffee = None
    def __init__(self,coffee) -> None:
        self._coffee = coffee
    @property
    def coffee(self):
        return self.coffee
    @coffee.setter
    def coffee(self,cf):
        self.coffee = cf
    @abstractmethod
    def calculate_total(self):
        pass