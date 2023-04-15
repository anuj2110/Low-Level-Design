import Board from "./Board";
import Dice from "./Dice";
import Player from "./Player";

export default class Game {
  board: Board;
  players: Player[];
  dice: Dice;
  winner: Player | null;
  constructor(
    boardSize: number,
    noOfSnakes: number,
    noOfLadders: number,
    noOfPlayers: number,
    noOfDice: number
  ) {
    this.board = new Board(boardSize, noOfLadders, noOfSnakes);
    this.players = [];
    for (let i = 0; i < noOfPlayers; i++) {
      this.players.push(new Player(`Player ${i + 1}`));
    }
    this.dice = new Dice(noOfDice, 6);
    this.winner = null;
  }

  mainGame() {
    while (this.winner === null) {
      const currentPlayer = this.getCurrentPlayer();
      console.log(
        `Current player is ${currentPlayer.getPlayerId()} and current positon is: ${currentPlayer.getPlayerPosition()}`
      );
      const diceNumber = this.dice.rollDice();

      const newPosition = currentPlayer.getPlayerPosition() + diceNumber;
      const finalPosition = this.getNextPosition(newPosition);
      currentPlayer.setPlayerPosition(finalPosition);

      console.log(
        `Current player is ${currentPlayer.getPlayerId()} and new positon is: ${currentPlayer.getPlayerPosition()}`
      );
      if (
        currentPlayer.getPlayerPosition() >=
        Math.pow(this.board.cells.length, 2) - 1
      ) {
        this.winner = currentPlayer;
      }
    }
    console.log(`Winner is: ${this.winner.getPlayerId()}`);
  }
  getCurrentPlayer() {
    const player = this.players.shift() as Player;
    this.players.push(player);
    return player;
  }
  getNextPosition(playerPosition: number) {
    if (playerPosition >= Math.pow(this.board.cells.length, 2) - 1) {
      return playerPosition;
    }
    const cell = this.board.getCell(playerPosition);
    if (cell.jump !== null && cell.jump.start === playerPosition) {
      let jumpType = cell.jump.start < cell.jump.end ? "Ladder" : "Snake";
      console.log(`You landed on ${jumpType}`);
      return cell.jump.end;
    }
    return playerPosition;
  }
}
