import { ConfigService, ConfigModule } from '@nestjs/config'

import { TypeOrmModule } from '@nestjs/typeorm'
import { DBconfig } from './index'
import { Module } from '@nestjs/common'
import { createConnection } from 'typeorm'
@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (configService: ConfigService) =>
                DBconfig(configService),
            // connectionFactory: async (options) => {
            //     const connection = await createConnection(options)
            //     return connection
            // },
        }),
    ],
})
export class DatabaseModule {}
