import { Test, TestingModule } from '@nestjs/testing'
import { BusRouteDetailsService } from './bus-route-details.service'

describe('BusRouteDetailsService', () => {
    let service: BusRouteDetailsService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [BusRouteDetailsService],
        }).compile()

        service = module.get<BusRouteDetailsService>(BusRouteDetailsService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
