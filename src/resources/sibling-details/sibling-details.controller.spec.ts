import { Test, TestingModule } from '@nestjs/testing'
import { SiblingDetailsController } from './sibling-details.controller'
import { SiblingDetailsService } from './sibling-details.service'

describe('SiblingDetailsController', () => {
    let controller: SiblingDetailsController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [SiblingDetailsController],
            providers: [SiblingDetailsService],
        }).compile()

        controller = module.get<SiblingDetailsController>(
            SiblingDetailsController
        )
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
