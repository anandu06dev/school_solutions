import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import * as config from './configuration'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            load: [config.default],
        }),
    ],
    controllers: [],
    providers: [],
    exports: [],
})
export class CoreModule {}
