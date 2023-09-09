from implementations.Espresso import Espresso
from implementations.Americano import Americano
from implementations.mocha import Mocha

espresso_coffee = Espresso()
americano_coffee = Americano()

mocha_espresso_coffee = Mocha(espresso_coffee)

print('Price of Mocha Espresso Coffee',mocha_espresso_coffee.calculate_total())

mocha_americano_coffee = Mocha(americano_coffee)

print('Price of Mocha Americano Coffee',mocha_americano_coffee.calculate_total())