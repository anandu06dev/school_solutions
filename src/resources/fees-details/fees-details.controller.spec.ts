import { Test, TestingModule } from '@nestjs/testing'
import { FeesDetailsController } from './fees-details.controller'
import { FeesDetailsService } from './fees-details.service'

describe('FeesDetailsController', () => {
    let controller: FeesDetailsController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [FeesDetailsController],
            providers: [FeesDetailsService],
        }).compile()

        controller = module.get<FeesDetailsController>(FeesDetailsController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
