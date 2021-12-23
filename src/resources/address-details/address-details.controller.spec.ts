import { Test, TestingModule } from '@nestjs/testing'
import { AddressDetailsController } from './address-details.controller'
import { AddressDetailsService } from './address-details.service'

describe('AddressDetailsController', () => {
    let controller: AddressDetailsController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AddressDetailsController],
            providers: [AddressDetailsService],
        }).compile()

        controller = module.get<AddressDetailsController>(
            AddressDetailsController
        )
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
