import { Test, TestingModule } from '@nestjs/testing'
import { ParentDetailsService } from './parent-details.service'

describe('ParentDetailsService', () => {
    let service: ParentDetailsService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ParentDetailsService],
        }).compile()

        service = module.get<ParentDetailsService>(ParentDetailsService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
