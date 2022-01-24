import { Module } from '@nestjs/common'
import { StudentDetailsService } from './student-details.v1.service'
import { StudentDetailsController } from './student-details.v1.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { StudentDetails } from './entities/student-detail.entity'
import { AuthModule } from '@resources/auth/auth.module'
import { UserModule } from '@resources/user/user.module'

@Module({
    imports: [
        UserModule,
        AuthModule,
        TypeOrmModule.forFeature([StudentDetails]),
    ],
    controllers: [StudentDetailsController],
    providers: [StudentDetailsService],
})
export class StudentDetailsModule {}
