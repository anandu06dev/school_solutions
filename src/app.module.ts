import {
    MiddlewareConsumer,
    Module,
    NestModule,
    RequestMethod,
} from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DatabaseModule } from '@core/database.module'
import { StudentDetailsModule } from '@resources/student-details/student-details.module'
import { AddressDetailsModule } from '@resources/address-details/address-details.module'
import { BusRouteDetailsModule } from '@resources/bus-route-details/bus-route-details.module'
import { FeesDetailsModule } from '@resources/fees-details/fees-details.module'
import { ParentDetailsModule } from '@resources/parent-details/parent-details.module'
import { SiblingDetailsModule } from '@resources/sibling-details/sibling-details.module'
import { AuthModule } from '@resources/auth/auth.module'
import { UserModule } from '@resources/user/user.module'
import { APP_FILTER } from '@nestjs/core'
import { HttpExceptionFilter } from '@common/filter/http.exception.filter'
import { PostalRefModule } from '@resources/postal-ref/postal-ref.module'
import { StudentsModule } from '@resources/students/students.module'
import { DatabaseMiddleware } from '@common/middleware/DatabaseMiddleware'
import { UserRoleModule } from '@resources/user-role/user-role.module'

const MODULES = [
    DatabaseModule,
    StudentsModule,
    UserModule,
    UserRoleModule,
    AuthModule,
    StudentDetailsModule,
    SiblingDetailsModule,
    ParentDetailsModule,
    FeesDetailsModule,
    BusRouteDetailsModule,
    AddressDetailsModule,
    PostalRefModule,
]

@Module({
    imports: [...MODULES],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_FILTER,
            useClass: HttpExceptionFilter,
        },
    ],
    exports: [StudentDetailsModule],
})
export class AppModule implements NestModule {
    // configure(consumer: MiddlewareConsumer) {
    //     consumer.apply(LoggerMiddleware).forRoutes('student-details')
    // }
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(DatabaseMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.ALL })
    }
}
