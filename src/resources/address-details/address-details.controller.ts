import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'
import { AddressDetailsService } from './address-details.service'
import { AddressDetailDto } from './dto/address-detail.dto'
import { UpdateAddressDetailDto } from './dto/update-address-detail.dto'

@ApiTags('address-details')
@Controller('address-details')
export class AddressDetailsController {
    constructor(
        private readonly addressDetailsService: AddressDetailsService
    ) {}

    @Post()
    create(@Body() createAddressDetailDto: AddressDetailDto) {
        return this.addressDetailsService.create(createAddressDetailDto)
    }

    @Get()
    findAll() {
        return this.addressDetailsService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.addressDetailsService.findOne(+id)
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateAddressDetailDto: UpdateAddressDetailDto
    ) {
        return this.addressDetailsService.update(id, updateAddressDetailDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.addressDetailsService.remove(+id)
    }
}
