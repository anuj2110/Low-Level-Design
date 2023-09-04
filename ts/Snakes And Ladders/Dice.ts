export default class Dice {
  numberOfDice: number;
  numberOfFaces: number;
  constructor(numberOfDice: number, numberOfFaces: number) {
    this.numberOfDice = numberOfDice;
    this.numberOfFaces = numberOfFaces;
  }

  rollDice() {
    let sum = 0;

    for (let i = 0; i < this.numberOfDice; i++) {
      sum += Math.floor(Math.random() * this.numberOfFaces) + 1;
    }
    return sum;
  }
}
