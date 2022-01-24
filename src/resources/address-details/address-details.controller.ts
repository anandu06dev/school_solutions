import { PageOptionsDto } from '@common/dtos'
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
import { AddressDetailsService } from './address-details.service'
import { AddressDetailDto } from './dto/address-detail.dto'
import { UpdateAddressDetailDto } from './dto/update-address-detail.dto'

@ApiTags(SCHOOL_SOLS.ADDRESSDETAILS)
@Controller(SCHOOL_SOLS.ADDRESSDETAILS)
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

    @Get('findByAdmissionId/:id')
    findByAdmissionId(@Param('id') id: string) {
        return this.addressDetailsService.findByAdmissionId(id)
    }
    @Get('/pageable/addressdetails')
    getPageableGetStudentDetails(
        @Query('pagination') pagination?: PageOptionsDto
    ) {
        return this.addressDetailsService.getPageableAddressDetails(pagination)
    }

    @Post('/pageable/addressdetails')
    getPageableStudentDetails(@Body() pageOptions: PageOptionsDto) {
        return this.addressDetailsService.getPageableAddressDetails(pageOptions)
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
