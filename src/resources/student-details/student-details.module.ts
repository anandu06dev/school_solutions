import { Module } from '@nestjs/common'
import { StudentDetailsService } from './student-details.service'
import { StudentDetailsController } from './student-details.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { StudentDetails } from './entities/student-detail.entity'
import { AuthModule } from '@resources/auth/auth.module'
import { UserModule } from '@resources/user/user.module'
import { SiblingDetails } from '@resources/sibling-details/entities/sibling-detail.entity'

@Module({
    imports: [
        UserModule,
        AuthModule,
        TypeOrmModule.forFeature([StudentDetails, SiblingDetails]),
    ],
    controllers: [StudentDetailsController],
    providers: [StudentDetailsService],
})
export class StudentDetailsModule {}
