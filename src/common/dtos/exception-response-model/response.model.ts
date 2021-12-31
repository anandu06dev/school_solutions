import { Request } from 'express'

export const GlobalResponseError: (
    statusCode: number,
    message: string,
    statusmessage: string,
    code: string,
    request: Request
) => IResponseError = (
    statusCode: number,
    message: string,
    statusmessage: string,
    code: string,
    request: Request
): IResponseError => {
    return {
        statusCode: statusCode,
        message,
        statusmessage,
        code,
        timestamp: new Date().toISOString(),
        path: request.url,
        method: request.method,
    }
}

export interface IResponseError {
    statusCode: number
    statusmessage: string
    message: string
    code: string
    timestamp: string
    path: string
    method: string
}
