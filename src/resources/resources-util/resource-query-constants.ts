import { IWhere } from '@resources/resource-model/resource.model'

export const CONDITION_STUDENT_IS_ACTIVE = [
    {
        condition: 'student_details.studentIsActive =:studentIsActive',
        params: { studentIsActive: 1 },
    },
]
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
    return {
        condition: `${siblingJoinName}` + '.id =:id',
        params: { id },
    }
}

export function getAdmissionID(admissionNo: string): string[] | string {
    console.log(
        admissionNo.includes(',') ? admissionNo.split(',') : admissionNo
    )
    return admissionNo.includes(',') ? admissionNo.split(',') : [admissionNo]
}
