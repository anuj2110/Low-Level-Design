from interfaces.addon_interface import AddOnInterface

class Mocha(AddOnInterface):
    
    def calculate_total(self):
        return 5+self._coffee.calculate_total()