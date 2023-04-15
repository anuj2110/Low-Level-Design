import Logger from "./Logger";
import LogLeveL from "./logEnum";

export class InfoLogger extends Logger {
  constructor(nextLogger: Logger|null) {
    super(nextLogger);
  }

  log(logLevel: number, message: string) {
    if (logLevel === LogLeveL.INFO) {
      console.log(message);
    } else {
      super.log(logLevel, message);
    }
  }
}
