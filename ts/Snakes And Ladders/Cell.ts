import Jump from "./Jump";

export default class Cell {
  jump: Jump | null;

  constructor(jump: Jump | null) {
    this.jump = jump;
  }
}
