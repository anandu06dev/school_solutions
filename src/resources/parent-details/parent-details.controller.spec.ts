import { Test, TestingModule } from '@nestjs/testing'
import { ParentDetailsController } from './parent-details.controller'
import { ParentDetailsService } from './parent-details.service'

describe('ParentDetailsController', () => {
    let controller: ParentDetailsController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ParentDetailsController],
            providers: [ParentDetailsService],
        }).compile()

        controller = module.get<ParentDetailsController>(
            ParentDetailsController
        )
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
