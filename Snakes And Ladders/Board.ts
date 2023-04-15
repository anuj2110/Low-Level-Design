import Cell from "./Cell";
import Jump from "./Jump";

export default class Board {
  cells: Cell[][] = [];

  constructor(boardSize: number, noOfLadders: number, noOfSnakes: number) {
    this.initializeBoard(boardSize);
    this.addSnakesAndLadders(noOfLadders, noOfSnakes);
  }

  initializeBoard(boardSize: number) {
    this.cells = new Array(boardSize).fill(new Array(boardSize));
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        this.cells[i][j] = new Cell(null);
      }
    }
  }

  addSnakesAndLadders(noOfLadders: number, noOfSnakes: number) {
    while (noOfSnakes > 0) {
      let snakeHead =
        Math.floor(Math.random() * Math.pow(this.cells.length, 2) - 1) + 1;
      let snakeTail =
        Math.floor(Math.random() * Math.pow(this.cells.length, 2) - 1) + 1;

      if (snakeTail > snakeHead) continue;

      const cell = this.getCell(snakeHead);
      cell.jump = new Jump();
      cell.jump.end = snakeTail;
      cell.jump.start = snakeHead;
      noOfSnakes--;
    }
    while (noOfLadders > 0) {
      let ladderHead =
        Math.floor(Math.random() * Math.pow(this.cells.length, 2) - 1) + 1;
      let ladderTail =
        Math.floor(Math.random() * Math.pow(this.cells.length, 2) - 1) + 1;

      if (ladderTail < ladderHead) continue;

      const cell = this.getCell(ladderHead);
      cell.jump = new Jump();
      cell.jump.end = ladderTail;
      cell.jump.start = ladderHead;
      noOfLadders--;
    }
  }

  getCell(cellNumber: number) {
    const row: number = Math.floor(cellNumber / this.cells.length);
    const column: number = Math.floor(cellNumber % this.cells.length);
    return this.cells[row][column];
  }
}
