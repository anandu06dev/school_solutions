import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction } from 'express'
import { getConnectionManager } from 'typeorm'

@Injectable()
export class DatabaseMiddleware implements NestMiddleware {
    use(req: any, res: any, next: NextFunction) {
        try {
            const connectionManager = getConnectionManager()
            connectionManager.connections.forEach((connection) => {
                console.log(connection.name, connection, connectionManager)
            })
        } catch (error) {}

        next()
    }
}
