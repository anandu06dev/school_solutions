import { PageMetaDto } from '@common/dtos/page-meta.dto'
import { PageDto } from '@common/dtos/page.dto'
import { QueryPostalRefDto } from '@common/dtos/query-postal-pagination.dto'
import { EntityRepository, AbstractRepository, ILike } from 'typeorm'
import { PostalRefDto } from '../dto/create-postal-ref.dto'
import { PostalRef } from '../entities/postal-ref.entity'
import { PostalRefProjection } from '../modal/postal-ref-projection'

@EntityRepository(PostalRef)
export class PostalRefRepository extends AbstractRepository<PostalRef> {
    searchByPostalref(postalProjection: QueryPostalRefDto) {
        const { postalName, pincode, taluk, districtName, stateName } =
            postalProjection
        return this.repository.find({
            where: {
                ...(postalName && {
                    postalName: ILike('%' + postalName + '%'),
                }),
                ...(stateName && {
                    stateName: ILike('%' + stateName + '%'),
                }),
                ...(districtName && {
                    districtName: ILike('%' + districtName + '%'),
                }),
                ...(taluk && {
                    taluk: ILike('%' + taluk + '%'),
                }),
                ...(pincode && {
                    pincode: ILike('%' + pincode + '%'),
                }),
            },
            take: postalProjection.take,
            skip: postalProjection.skip,
        })
    }

    async searchByPostalrefPagination(
        postalProjection: QueryPostalRefDto
    ): Promise<PageDto<PostalRef>> {
        const { postalName, pincode, taluk, districtName, stateName } =
            postalProjection
        try {
            const queryBuilder =
                this.repository.createQueryBuilder('postal_ref')
            queryBuilder.where({
                ...(postalName && {
                    postalName: ILike('%' + postalName + '%'),
                }),
                ...(stateName && {
                    stateName: ILike('%' + stateName + '%'),
                }),
                ...(districtName && {
                    districtName: ILike('%' + districtName + '%'),
                }),
                ...(taluk && {
                    taluk: ILike('%' + taluk + '%'),
                }),
                ...(pincode && {
                    pincode: ILike('%' + pincode + '%'),
                }),
            })

            queryBuilder
                .orderBy('postal_ref.districtName', postalProjection.order)
                .skip(postalProjection.skip)
                .take(postalProjection.take)

            const raw = await queryBuilder.getManyAndCount()
            const pageMetaDto = new PageMetaDto({
                itemCount: raw[1],
                pageOptionsDto: postalProjection,
            })
            return new PageDto(raw[0], pageMetaDto)
        } catch (e) {
            console.log(e)
        }
    }

    getPostalNameByState(stateName: string) {
        return this.repository.find({
            where: {
                ...(stateName && {
                    stateName: ILike('%' + stateName + '%'),
                }),
            },
        })
    }

    getPostalNameByDistrict(districtName: string) {
        console.log(districtName)
        return this.repository.find({
            where: {
                ...(districtName && {
                    districtName: ILike('%' + districtName + '%'),
                }),
            },
        })
    }

    getPostalNameByPinCode(pincode: string) {
        console.log(pincode)
        return this.repository.find({
            where: {
                ...(pincode && {
                    pincode: ILike('%' + pincode + '%'),
                }),
            },
        })
    }

    getAllStateName() {
        return this.repository
            .createQueryBuilder('postal_ref')
            .groupBy('postal_ref.stateName')
            .getMany()
    }
}
