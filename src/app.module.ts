import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { StudentsModule } from '@resources/students/students.module'
import { DatabaseModule } from '@core/database.module'
import { StudentDetailsModule } from '@resources/student-details/student-details.module'
import { AddressDetailsModule } from '@resources/address-details/address-details.module'
import { BusRouteDetailsModule } from '@resources/bus-route-details/bus-route-details.module'
import { FeesDetailsModule } from '@resources/fees-details/fees-details.module'
import { ParentDetailsModule } from '@resources/parent-details/parent-details.module'
import { SiblingDetailsModule } from '@resources/sibling-details/sibling-details.module'

const MODULES = [
    DatabaseModule,
    StudentsModule,
    StudentDetailsModule,
    SiblingDetailsModule,
    ParentDetailsModule,
    FeesDetailsModule,
    BusRouteDetailsModule,
    AddressDetailsModule,
]

@Module({
    imports: [...MODULES],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
