import {HandlersHolder, HttpApiFunction, HttpFunctionMethod, LambdaFunction} from "./annotations/STS-DSL";
import {APIGatewayProxyResult} from "aws-lambda";
import {_200S} from "./utils/Responses";

const log = require('simple-node-logger').createLogManager().createLogger(__filename.split(/[\\/]/).pop());

@HandlersHolder()
class Hello {
    @LambdaFunction()
    @HttpApiFunction({
        path: "/hello",
        method: HttpFunctionMethod.GET,
    })
    static async handler(_event): Promise<APIGatewayProxyResult> {
        log.info("Hello GET request received");
        return _200S();

    }
}

export const helloHandler = Hello.handler
