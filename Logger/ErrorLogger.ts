import Logger from "./Logger";
import LogLeveL from "./logEnum";

export class ErrorLogger extends Logger {
  constructor(nextLogger: Logger) {
    super(nextLogger);
  }

  log(logLevel: number, message: string) {
    if (logLevel === LogLeveL.ERROR) {
      console.log(message);
    } else {
      super.log(logLevel, message);
    }
  }
}
