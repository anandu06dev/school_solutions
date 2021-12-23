import { Test, TestingModule } from '@nestjs/testing'
import { BusRouteDetailsController } from './bus-route-details.controller'
import { BusRouteDetailsService } from './bus-route-details.service'

describe('BusRouteDetailsController', () => {
    let controller: BusRouteDetailsController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [BusRouteDetailsController],
            providers: [BusRouteDetailsService],
        }).compile()

        controller = module.get<BusRouteDetailsController>(
            BusRouteDetailsController
        )
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
