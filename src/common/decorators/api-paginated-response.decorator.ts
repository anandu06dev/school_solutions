import { applyDecorators, Type } from '@nestjs/common'
import { ApiExtraModels, ApiOkResponse, getSchemaPath } from '@nestjs/swagger'
// import { NewStudentDTO, UpdateStudentDTO } from '@resources/students/dto'
import { UpdateStudentDto } from '@resources/students/dto/update-student.dto'
import { PageDto } from 'src/common/dtos'

// const dtos = [PageDto, UpdateStudentDTO, NewStudentDTO]

export const ApiPaginatedResponse = <TModel extends Type<any>>(
    model: TModel
) => {
    return applyDecorators(
        ApiExtraModels(PageDto, UpdateStudentDto),
        ApiOkResponse({
            description: 'Successfully received model list',
            schema: {
                allOf: [
                    {
                        $ref: getSchemaPath(PageDto),
                    },
                    {
                        properties: {
                            data: {
                                type: 'array',
                                items: { $ref: getSchemaPath(model) },
                            },
                        },
                    },
                ],
            },
        })
    )
}
