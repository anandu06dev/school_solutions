import { Test, TestingModule } from '@nestjs/testing'
import { SiblingDetailsService } from './sibling-details.service'

describe('SiblingDetailsService', () => {
    let service: SiblingDetailsService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [SiblingDetailsService],
        }).compile()

        service = module.get<SiblingDetailsService>(SiblingDetailsService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
