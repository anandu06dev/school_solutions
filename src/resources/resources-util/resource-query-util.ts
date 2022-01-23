import { getRepository, InsertResult } from 'typeorm'
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

// sibilings,parents,fees,busRouteDetails,addresses
//'student_details.fees', 'fees'
function getStudentDetailCustomQueryBuilder(
    qb: any,
    query: string[],
    mainjoin: string
) {
    try {
        return query.map((item) => {
            console.log(`${mainjoin}.${item}`, `${item}`)
            return qb.leftJoinAndSelect(`${mainjoin}.${item}`, `${item}`)
        })
    } catch (e) {
        console.log(e)
    }
}

/**
 * Upsert for TypeORM on PostgreSQL
 * Returns InsertResult object (contains ID)
 * @param repo Repository
 * @param {object | object[]} data Data to upsert. Can be object or array
 * @param {string} primaryKey Name of column that is primary key
 * @returns {Promise<InsertResult>}
 */
export default function upsert(
    Entity,
    data,
    primaryKey: string,
    allowedColumns?: string[]
): Promise<InsertResult | any> {
    const repo = getRepository(Entity)
    //const entitiy = getEntity
    const temp = {}
    const keys = Object.keys(data)
    for (let i = 0; i < keys.length; i++) {
        console.log('allowedColumns', allowedColumns, data[i])
        if (allowedColumns.includes(keys[i])) {
            temp[keys[i]] = data[keys[i]]
            console.log('temp', temp, data[keys[i]], keys[i])
        } else {
            console.log(temp, allowedColumns[i], data[i])
        }
    }
    console.log('temp', temp, allowedColumns, 'tests')
    // const keys = console.log(data, primaryKey,temp)
    return repo.upsert([temp], [primaryKey])
}

// if (keys.length < 1) {
//     throw new Error('Cannot upsert without any values specified')
// }
// const row = Array.isArray(data) ? data[0] : data
// const keys = Object.keys(row)
// const updateStr = keys
//     .map((key) => `"${key}" = EXCLUDED."${key}"`)
//     .join(',')
// .orUpdate({
//     conflict_target: [primaryKey],
//     overwrite: [`${updateStr}`],
// })
// .orUpdate(`("${primaryKey}") DO UPDATE SET ${updateStr}`)

// export default function upsert(
//     Entity,
//     data,
//     primaryKey: string,
//     allowedColumns?: string[]
// ): Promise<InsertResult> {
//     const repo = getRepository(Entity)
//     const temp = {}
//     const keys = Object.keys(data)
//     for (let i = 0; i < keys.length; i++) {
//         console.log('allowedColumns', allowedColumns, data[i])
//         if (allowedColumns.includes(keys[i])) {
//             temp[keys[i]] = data[keys[i]]
//             console.log('temp', temp, data[keys[i]], keys[i])
//         } else {
//             console.log(temp, allowedColumns[i], data[i])
//         }
//     }
//     // const keys = console.log(data, primaryKey,temp)
//     return repo.upsert([data], [primaryKey])
// }

export function getAllowedKeys(obj, mainKey, accessKey) {
    const temp = []
    if (obj && mainKey && accessKey) {
        for (const item of Object.keys(obj[mainKey])) {
            if (obj[mainKey][item]['access'][accessKey] === true) {
                temp.push(item)
            }
        }
    } else {
        throw new Error(`need 3 parameters`)
    }
    return temp
}
