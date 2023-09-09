from interfaces.coffee_inteface import CoffeeInterface

class Espresso(CoffeeInterface):

    def get_description(self):
        return 'Espresso coffee'

    def calculate_total(self):
        return 10