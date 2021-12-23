import { EntityRepository, AbstractRepository, In, ILike } from 'typeorm'
import { StudentDetails } from '../entities/student-detail.entity'

/*

 The difference between this type of repository and the previous one is that it does
 not expose all the methods Repository has.
 AbstractRepository does not have any public methods,
 it only has protected methods, like manager and repository,
 which you can use in your own public methods.
 Extending AbstractRepository is useful
 if you don't want to expose all methods the standard Repository has to the public.

 */

@EntityRepository(StudentDetails)
export class StudentDetailRepository extends AbstractRepository<StudentDetails> {
    // createAndSave(firstName: string, lastName: string) {
    //     const user = new StudentDetails()
    //     user.firstName = firstName
    //     user.lastName = lastName
    //     return this.manager.save(user)
    // }

    findByIdAndIsActive(admissionNo: number) {
        return this.repository.findOne({
            where: {
                admissionNo,
                studentIsActive: true,
            },
            order: {
                studentFirstName: 'ASC',
            },
        })
    }

    findByAll() {
        return this.repository.find({
            order: {
                studentFirstName: 'ASC',
            },
        })
    }

    findByProjectionByIdAndActive(
        id: any,
        isActive: boolean,
        admissionId: string[]
    ) {
        return this.repository.find({
            where: {
                admissionNo: In(admissionId),
                studentIsActive: isActive,
            },
            select: id,
            order: {
                studentFirstName: 'ASC',
            },
        })
    }

    findByProjection(id: any) {
        return this.repository.find({
            select: id,
            order: {
                studentFirstName: 'ASC',
            },
        })
    }

    searchByStudentFirstName(studentFirstName: string) {
        return this.repository.find({
            studentFirstName: ILike('%' + studentFirstName + '%'),
        })
    }

    //userRepository.find({ select: ["firstName", "lastName"] });
}
