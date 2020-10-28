/**
 * Interface for the WebResponse
 *
 * @property headers
 *              Optional object containing headers
 * @property statusCode
 *              Optional The status code for the response (200, 500, 404...)
 * @property statusDescription
 *              Optional Additional description for the status code
 * @property body
 *              Optional The body of the response
 */
import {APIGatewayProxyResult} from "aws-lambda";

export const _200S = (): APIGatewayProxyResult => {
    return {
        statusCode: 200,
        body: JSON.stringify({status: "ok"})
    }
}

const headers = (origin: string): { [key: string]: any; } => {
    return {
        'Access-Control-Allow-Origin': origin,
        'Access-Control-Allow-Credentials': true,
    }
}

export const _200 = (origin: string, data: {}): APIGatewayProxyResult => {
    return {
        headers: headers(origin),
        statusCode: 200,
        body: JSON.stringify(data),
    };
}

export const _400 = (origin: string, message: string): APIGatewayProxyResult => {
    return {
        headers: headers(origin),
        statusCode: 400,
        body: JSON.stringify({message}),

    };
}

export const _402 = (origin: string, message: string): APIGatewayProxyResult => {
    return {
        headers: headers(origin),
        statusCode: 400,
        body: JSON.stringify({message}),
    };
}

export const _404 = (origin: string, message: string): APIGatewayProxyResult => {
    return {
        headers: headers(origin),
        statusCode: 404,
        body: JSON.stringify({message}),
    };
}

export const _500 = (origin: string, message: string): APIGatewayProxyResult => {
    return {
        headers: headers(origin),
        statusCode: 500,
        body: JSON.stringify({message}),
    };
}

export const _500S = (message: string): APIGatewayProxyResult => {
    return {
        statusCode: 500,
        body: JSON.stringify({error: message}),
    };
}
