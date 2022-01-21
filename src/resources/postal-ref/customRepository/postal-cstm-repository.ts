import { EntityRepository, AbstractRepository, ILike } from 'typeorm'
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
