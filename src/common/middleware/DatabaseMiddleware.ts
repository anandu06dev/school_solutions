import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction } from 'express'
import { getConnection } from 'typeorm'

@Injectable()
export class DatabaseMiddleware implements NestMiddleware {
    use(req: any, res: any, next: NextFunction) {
        // try {
        //     const connectionManager = getConnectionManager()
        const connection = getConnection()
        //     connectionManager.connections.forEach((connection) => {
        //         console.log(connection.name, connection, connectionManager)
        //     })
        // } catch (error) {}

        // next()
        return connection
            .query(`SELECT 1`)
            .then((res: any) => next())
            .catch((e) => {
                if (e?.code === 'ECONNREFUSED') {
                    new BadRequestException(`database failed to connect`)
                }
            })
    }
}
