import { ApiProperty } from '@nestjs/swagger'
import { IsOptional } from 'class-validator'
import { PostalRefDto } from '../dto/create-postal-ref.dto'

export class PostalRefProjection extends PostalRefDto {
    @ApiProperty({
        example: '["studentFirstName","studentLastName","admissionNo"]',
        type: 'text',
        description: 'Describes about UserName',
    })
    @IsOptional()
    projectionId: string[]
    // @ApiProperty({
    //     example: '1',
    //     type: 'text',
    //     description: 'Describes about UserName',
    // })
    // @IsOptional()
    // isActive?: boolean
    // @ApiProperty({
    //     example: '[1002,1004]',
    //     type: 'text',
    //     description: 'Describes about UserName',
    // })
    // @IsOptional()
    // Id?: string[]
}
