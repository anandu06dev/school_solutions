import { EntityRepository, AbstractRepository, ILike, In } from 'typeorm'
import { PostalRef } from '../entities/postal-ref.entity'
import { PostalRefProjection } from '../modal/postal-ref-projection'

@EntityRepository(PostalRef)
export class PostalRefRepository extends AbstractRepository<PostalRef> {
    searchByPostalref(postalProjection: PostalRefProjection) {
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
            take: 10,
        })
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
        return this.repository.find({
            where: {
                ...(districtName && {
                    districtName: ILike('%' + districtName + '%'),
                }),
            },
        })
    }

    getAllStateName() {
        //     return this.repository
        //         .createQueryBuilder('postal_ref')
        //         .select('postal_ref.stateName')
        //         .addSelect('COUNT(postal_ref.stateName)', 'count')
        //         .groupBy('postal_ref.stateName')
        // }
        console.log('getAllStateName')
        return this.repository.query(
            `select stateName from postal_ref group by stateName;`
        )
    }
}