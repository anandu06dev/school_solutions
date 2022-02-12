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
            if (param.primaryJoin.includes('student_details')) {
                qb.leftJoinAndSelect(
                    param.primaryJoin + '.' + queryJoin,
                    queryJoin
                )
            } else {
                qb.innerJoinAndSelect(
                    param.primaryJoin + '.' + queryJoin,
                    queryJoin
                )
            }
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
    let temp = data
    if (allowedColumns) {
        temp = {}
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
    }
    return repo
        .findByIds(temp.admissionNo ? [temp.admissionNo] : [temp.id])
        .then(async (d) => {
            temp = await appendTimeLogic(temp, d)
            return repo.upsert([temp], [primaryKey])
        })
        .catch((e) => {
            console.error('err', e)
        })
}

function appendTimeLogic(
    data: { [key: string]: any } = {},
    d: any[] = []
): {
    [key: string]: any
} {
    const temp: { [key: string]: any } = { ...data }

    if (d.length === 0) temp['createdTimeStamp'] = new Date()
    else temp['updatedTimeStamp'] = new Date()
    return temp
}

function appentCreatedByAndUpdatedByLogic(data: { [key: string]: any } = {}): {
    [key: string]: any
} {
    const temp: { [key: string]: any } = { ...data }
    return temp
}

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

export function appendAccess(d, util = false) {
    return Object.fromEntries(
        Object.keys(d).map((item) => {
            const temp = []
            temp[0] = item
            temp[1] = {
                access: {
                    read: false,
                    write: false,
                    update: false,
                    delete: false,
                },
            }
            if (util) {
                temp[1] = { ...temp[1], ...{ util: { isOptional: false } } }
            }
            return temp
        })
    )
}

export function initRolesRules(allDto, util = false) {
    const temp = JSON.parse(JSON.stringify(allDto))
    for (const table of Object.keys(temp))
        for (const column of Object.keys(temp[table])) {
            temp[table][column] = {
                access: {
                    read: false,
                    write: false,
                    update: false,
                    delete: false,
                },
            }
            if (util) {
                temp[table][column]['util'] = {
                    isOptional: false,
                }
            }
        }
    return temp
}

export function generateRandomNumber(n) {
    return (
        Math.floor(Math.random() * (9 * Math.pow(10, n - 1))) +
        Math.pow(10, n - 1)
    )
}
