export default class Player {
  private playerId: string;
  private currentPos: number = 0;

  constructor(playerId: string) {
    this.playerId = playerId;
  }

  getPlayerId(): string {
    return this.playerId;
  }

  getPlayerPosition(): number {
    return this.currentPos;
  }

  setPlayerPosition(newPosition: number) {
    this.currentPos = newPosition;
  }
}
