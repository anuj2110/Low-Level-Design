from interfaces.coffee_inteface import CoffeeInterface

class Americano(CoffeeInterface):

    def get_description(self):
        return 'Americano'
    
    def calculate_total(self):
        return 20