import { DebugLogger } from "./DebugLogger"
import { ErrorLogger } from "./ErrorLogger"
import { InfoLogger } from "./InfoLogger"
import Logger from "./Logger"
import LogLeveL from "./logEnum"

function main(){
    const customLogger:Logger=  new InfoLogger(new ErrorLogger(new DebugLogger(null)))

    customLogger.log(LogLeveL.DEBUG,"Debug Message")
}

main()