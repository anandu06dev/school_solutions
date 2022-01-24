/* eslint-disable @typescript-eslint/ban-types */
import { StudentDetailDto } from '@resources/student-details/dto/student-detail.dto'
import { EntityManager, QueryFailedError } from 'typeorm'

interface Type<T> extends Function {
    new (...args: any[]): T
}

export interface UpsertOptions<E extends {}, K = keyof E> {
    skip?: K[]
    pk?: K | K[]
}

function arrayify<T>(maybe: T | T[]) {
    return Array.isArray(maybe) ? maybe : [maybe]
}

function objectKeys<T extends object>(obj: T) {
    return Object.keys(obj) as Array<keyof typeof obj>
}

export async function upsertOptions<E extends {}>(
    entityManager: EntityManager,
    Entity: Type<E>,
    data: E | E[] , // allow both single entity or multiple entities
    options: UpsertOptions<E> = {}
): Promise<E> {
    const row = Array.isArray(data) ? data[0] : data // get a single entity
    type K = keyof typeof row

    const pks = arrayify(options.pk || ('id' as K))
    const skip = options.skip || []
    const keys = objectKeys(row).filter((key) => !skip.includes(key)) // get key from the single entity

    if (keys.length === 0) {
        throw new QueryFailedError(
            '',
            [],
            'Cannot upsert without values specified.'
        )
    }

    const {
        namingStrategy: { columnName },
        driver: { escape },
    } = entityManager.connection

    const col = (key: K) => {
        return escape(columnName(key.toString(), undefined, []))
    }

    const pk = pks.map(col).join(', ')
    const set = keys
        .map(col)
        .map((k) => `${k} = EXCLUDED.${k}`)
        .join(', ')

    const { generatedMaps } = await entityManager
        .getRepository(Entity)
        .createQueryBuilder()
        .insert()
        .values(data)
        .onConflict(`(${pk}) DO UPDATE SET ${set}`)
        .returning('*')
        .execute()

    return generatedMaps[0] as E
}