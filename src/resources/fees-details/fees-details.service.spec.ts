import { Test, TestingModule } from '@nestjs/testing'
import { FeesDetailsService } from './fees-details.service'

describe('FeesDetailsService', () => {
    let service: FeesDetailsService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [FeesDetailsService],
        }).compile()

        service = module.get<FeesDetailsService>(FeesDetailsService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
