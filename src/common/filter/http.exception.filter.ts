import { GlobalResponseError } from '@common/dtos/exception-response-model/response.model'
import {
    Catch,
    HttpException,
    ExceptionFilter,
    ArgumentsHost,
    HttpStatus,
} from '@nestjs/common'
import { Request, Response } from 'express'
import {
    QueryFailedError,
    EntityNotFoundError,
    CannotCreateEntityIdMapError,
} from 'typeorm'
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost) {
        const context = host.switchToHttp()
        const response = context.getResponse<Response>()
        const request = context.getRequest<Request>()
        // const message = (exception as any).message.message
        // const status = HttpStatus.INTERNAL_SERVER_ERROR

        // const code = 'HttpException'
        let { status, code, message } = exception as any

        switch (exception.constructor) {
            case HttpException:
                status = (exception as HttpException).getStatus()
                message = (exception as HttpException).message
                code = (exception as any).code
                break
            case QueryFailedError: // this is a TypeOrm error
                status = HttpStatus.UNPROCESSABLE_ENTITY
                message = (exception as QueryFailedError).message
                code = (exception as any).code
                break
            case EntityNotFoundError: // this is another TypeOrm error
                status = HttpStatus.UNPROCESSABLE_ENTITY
                message = (exception as EntityNotFoundError).message
                code = (exception as any).code
                break
            case CannotCreateEntityIdMapError: // and another
                status = HttpStatus.UNPROCESSABLE_ENTITY
                message = (exception as CannotCreateEntityIdMapError).message
                code = (exception as any).code
                break
            default:
                const respMesage = (exception as any)?.response?.message
                message =
                    respMesage && Array.isArray(respMesage)
                        ? respMesage.join(',') + '  ' + message
                        : message
        }

        response
            .status(status)
            .json(GlobalResponseError(status, message, code, request))
    }
}
