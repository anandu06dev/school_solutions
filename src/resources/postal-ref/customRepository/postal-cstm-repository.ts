import { EntityRepository, AbstractRepository, ILike, In } from 'typeorm'
import { PostalRef } from '../entities/postal-ref.entity'
import { PostalRefProjection } from '../modal/postal-ref-projection'

@EntityRepository(PostalRef)
export class PostalRefRepository extends AbstractRepository<PostalRef> {
    searchByPostalref(postalProjection: PostalRefProjection) {
        const { postalName, pincode, taluk, districtName, stateName } =
            postalProjection
        console.log(
            postalName,
            pincode,
            taluk,
            districtName,
            stateName,
            postalProjection
        )
        return this.repository.find({
            where: {
                pincode: ILike('%' + pincode + '%'),
            },
            take: 10,
        })
    }
}
