import { PageOptionsDto } from '@common/dtos'
import { QueryPostalRefDto } from '@common/dtos/query-postal-pagination.dto'
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
import { PostalRefDto } from './dto/create-postal-ref.dto'
import { PostalRefService } from './postal-ref.service'

@ApiTags('postal-ref')
@Controller('postal-ref')
export class PostalRefController {
    constructor(private readonly postalRefService: PostalRefService) {
        console.log('PostalRefController')
    }

    @Post()
    create(@Body() createPostalRefDto: PostalRefDto) {
        return this.postalRefService.create(createPostalRefDto)
    }

    @Get()
    findAll() {
        return this.postalRefService.findAll()
    }

    // @Post('findByProjection')
    // findByProjection(@Body() postalRef: PostalRefProjection) {
    //     return this.postalRefService.findByProjection(postalRef)
    // }
    @Get('getAllState')
    getAllState() {
        console.log('getAllState')
        return this.postalRefService.getAllState()
    }

    @Get('/getPostalNameByState/:stateName')
    getPostalNameByState(@Param('stateName') stateName: string) {
        console.log('getPostalNameByState', stateName)
        return this.postalRefService.getPostalNameByState(stateName)
    }

    @Get('/getPostalNameByDistrict/:districtName')
    getPostalNameByDistrict(@Param('districtName') districtName: string) {
        console.log('districtName', districtName)
        return this.postalRefService.getPostalNameByDistrict(districtName)
    }

    @Get('/getPostalNameByPinCode/:pincode')
    getPostalNameByPinCode(@Param('pincode') pincode: string) {
        console.log('pincode', pincode)
        return this.postalRefService.getPostalNameByPinCode(pincode)
    }

    @Get('/pageable/postalRef')
    getPageableGetStudentDetails(@Query() pagination?: PageOptionsDto) {
        return this.postalRefService.getPageablePostalRef(pagination)
    }

    @Get('/pageable/getPostalName')
    getPostalName(@Query() pagination?: QueryPostalRefDto) {
        return this.postalRefService.getPostalName(pagination)
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        console.log('findOne')
        return this.postalRefService.findOne(+id)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updatePostalRefDto: PostalRefDto) {
        return this.postalRefService.update(+id, updatePostalRefDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.postalRefService.remove(+id)
    }
}
