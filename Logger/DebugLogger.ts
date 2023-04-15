import Logger from "./Logger";
import LogLeveL from "./logEnum";

export class DebugLogger extends Logger {
  constructor(nextLogger: Logger|null) {
    super(nextLogger);
  }

  log(logLevel: number, message: string) {
    if (logLevel === LogLeveL.DEBUG) {
      console.log(message);
    } else {
      super.log(logLevel, message);
    }
  }
}
