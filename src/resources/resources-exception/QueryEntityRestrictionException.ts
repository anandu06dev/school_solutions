import { HttpException, HttpStatus } from '@nestjs/common'

export class QueryEntityRestrictionException extends HttpException {
    constructor() {
        super(
            `You can't join with uniqueId & multiple projections`,
            HttpStatus.PRECONDITION_FAILED
        )
    }
}
