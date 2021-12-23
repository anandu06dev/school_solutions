import { Test, TestingModule } from '@nestjs/testing'
import { StudentDetailsService } from './student-details.service'

describe('StudentDetailsService', () => {
    let service: StudentDetailsService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [StudentDetailsService],
        }).compile()

        service = module.get<StudentDetailsService>(StudentDetailsService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
