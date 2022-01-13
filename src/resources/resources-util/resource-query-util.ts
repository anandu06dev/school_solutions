import {
    AllowedEntity,
    ICustomQueryBuilder,
} from '@resources/resource-model/resource.model'
import { SelectQueryBuilder } from 'typeorm'

export function LookForAdmissionId(admissionNo: number): {
    [key: string]: number
} {
    return admissionNo ? { admissionNo } : {}
}

export function LookForId(id: string): {
    [key: string]: string
} {
    return id ? { id } : {}
}

export async function getConditionlessQb(
    qb: SelectQueryBuilder<AllowedEntity>,
    param: ICustomQueryBuilder
): Promise<SelectQueryBuilder<AllowedEntity>> {
    if (param?.where && Array.isArray(param.where)) {
        for (let i = 0; i < param.where.length; i++) {
            const where = param.where[i]
            if (where.condition && where.params) {
                if (i === 0) qb.where(where.condition, where.params)
                else qb.andWhere(where.condition, where.params)
            }
        }
    }
    if (
        param.primaryJoin &&
        Array.isArray(param.queryJoin) &&
        param?.queryJoin
    ) {
        for (let i = 0; i < param.queryJoin.length; i++) {
            const queryJoin = param.queryJoin[i]
            console.dir(queryJoin, param.primaryJoin + '.' + queryJoin)
            qb.leftJoinAndSelect(param.primaryJoin + '.' + queryJoin, queryJoin)
        }
    }
    return await qb
}
