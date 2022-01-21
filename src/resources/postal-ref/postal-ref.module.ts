import { Module } from '@nestjs/common'
import { PostalRefService } from './postal-ref.service'
import { PostalRefController } from './postal-ref.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PostalRef } from './entities/postal-ref.entity'

@Module({
    imports: [TypeOrmModule.forFeature([PostalRef])],
    controllers: [PostalRefController],
    providers: [PostalRefService],
})
export class PostalRefModule {}
