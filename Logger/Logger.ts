export default abstract class Logger {
  public static INFO: number = 1;
  public static DEBUG: number = 2;
  public static ERROR: number = 3;

  nextLogger: Logger|null;

  constructor(nextLogger: Logger|null) {
    this.nextLogger = nextLogger;
  }

  log(logLevel: number, message: string) {
    if (this.nextLogger != null) {
      this.nextLogger.log(logLevel, message);
    }
  }
}
