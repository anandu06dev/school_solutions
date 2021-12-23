import { Test, TestingModule } from '@nestjs/testing'
import { StudentDetailsController } from './student-details.controller'
import { StudentDetailsService } from './student-details.service'

describe('StudentDetailsController', () => {
    let controller: StudentDetailsController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [StudentDetailsController],
            providers: [StudentDetailsService],
        }).compile()

        controller = module.get<StudentDetailsController>(
            StudentDetailsController
        )
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
