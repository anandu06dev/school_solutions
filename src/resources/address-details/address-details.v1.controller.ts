import { AddressQueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { SCHOOL_SOLS } from '@utils/apiEnums'
import { AddressDetailsService } from './address-details.v1.service'
import { AddressDetailDto } from './dto/address-detail.dto'
import { UpdateAddressDetailDto } from './dto/update-address-detail.dto'

@ApiTags('/v1/' + SCHOOL_SOLS.ADDRESSDETAILS)
// @UseGuards(AuthGuard())
@Controller('/v1/' + SCHOOL_SOLS.ADDRESSDETAILS)
export class AddressDetailsController {
    constructor(
        private readonly addressDetailsService: AddressDetailsService
    ) {}

    @Post()
    create(@Body() createAddressDetailDto: AddressDetailDto) {
        return this.addressDetailsService.createorUpdate(createAddressDetailDto)
    }

    @Get(`/${SCHOOL_SOLS.ADDRESSDETAILS}`)
    getPageableGetStudentDetails(
        @Query('pagination') pagination?: AddressQueryPageOptionsDto
    ) {
        return this.addressDetailsService.getPageable(pagination)
    }

    @Patch()
    update(@Body() updateAddressDetailDto: UpdateAddressDetailDto) {
        return this.addressDetailsService.createorUpdate(updateAddressDetailDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.addressDetailsService.remove(+id)
    }
}
