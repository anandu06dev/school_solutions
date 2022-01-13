import { StudentQueryPageOptionsDto } from '@common/dtos/query-pagination.dto'
import { IWhere } from '@resources/resource-model/resource.model'

export const CONDITION_STUDENT_IS_ACTIVE = [
    {
        condition: 'student_details.studentIsActive =:studentIsActive',
        params: { studentIsActive: 1 },
    },
]

export function getRecordStatus(status: string): IWhere {
    return {
        condition: 'student_details.studentIsActive =:studentIsActive',
        params: { studentIsActive: status },
    }
}
// {
//     condition: 'student_details.admissionNo IN (:...aid)',
//     params: { getAdmissionID(admissionNo) },
// }

export function getStudentAddmissionCondition(admissionNo: string): IWhere {
    return {
        condition: 'student_details.admissionNo IN (:...aid)',
        params: { aid: getAdmissionID(admissionNo) },
    }
}

// {
//     condition: `${pageOptionsDto.join}` + '.id =:id',
//     params: { id: 'c7409a8e-f507-4a77-98a0-fca2ed08adf4' },
// },

export function getSecondaryJoinAndIdCondition(
    id: string,
    siblingJoinName
): IWhere {
    console.log('getSecondaryJoinAndIdCondition', id, siblingJoinName)
    if (id && siblingJoinName) {
        return {
            condition: `${siblingJoinName}` + '.id =:id',
            params: { id },
        }
    } else return {}
}

export function getAdmissionID(admissionNo: string): string[] | string {
    console.log(
        admissionNo.includes(',') ? admissionNo.split(',') : admissionNo
    )
    return admissionNo.includes(',') ? admissionNo.split(',') : [admissionNo]
}

export function getQueryJoin(join: string | string[]) {
    console.log(Array.isArray(join) ? join : [join])
    if (join) return Array.isArray(join) ? join : [join]
    else return []
}

export const orderBy = async (
    qb,
    pageOptionsDto: StudentQueryPageOptionsDto
) => {
    const { primaryJoin, orderByField, order } = pageOptionsDto
    //orderByField = orderByField ? orderByField : 'createdTimeStamp'
    //order = order ? order : Order.ASC
    return qb.orderBy(primaryJoin + '.' + orderByField, order)
}
