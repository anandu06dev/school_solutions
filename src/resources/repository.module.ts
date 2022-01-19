//Needs share the repo across all modules from here

import { PageDto, PageMetaDto } from '@common/dtos'
import {
    StudentQueryPageOptionsDto,
    SiblingQueryPageOptionsDto,
} from '@common/dtos/query-pagination.dto'
import { async } from 'rxjs'
import { Repository, SelectQueryBuilder } from 'typeorm'
import { AllowedEntity } from './resource-model/resource.model'
import { QueryEntityRestrictionException } from './resources-exception/QueryEntityRestrictionException'
import {
    getRecordStatus,
    getStudentAddmissionCondition,
    getSecondaryJoinAndIdCondition,
    getQueryJoin,
    orderBy,
} from './resources-util/resource-query-constants'
import { getConditionlessQb } from './resources-util/resource-query-util'
import { SiblingDetails } from './sibling-details/entities/sibling-detail.entity'
import { StudentDetails } from './student-details/entities/student-detail.entity'

export async function getPageableStudentsRepo(
    pageOptionsDto: StudentQueryPageOptionsDto | SiblingQueryPageOptionsDto,
    _studentRepository?: Repository<StudentDetails>
): Promise<any> {
    // try {
    console.log('getPageableStudentsRepo', pageOptionsDto)
    if (Array.isArray(pageOptionsDto.join) && pageOptionsDto.uniqueId) {
        throw new QueryEntityRestrictionException()
    } else {
        let queryBuilder = _studentRepository.createQueryBuilder(
            pageOptionsDto.primaryJoin
        ) as SelectQueryBuilder<AllowedEntity>
        queryBuilder = await getConditionlessQb(queryBuilder, {
            primaryJoin: pageOptionsDto.primaryJoin,
            where: [
                getRecordStatus(pageOptionsDto.activeRecords),
                pageOptionsDto.aid
                    ? getStudentAddmissionCondition(pageOptionsDto.aid)
                    : {},
                pageOptionsDto.getOtherDetails === 'true'
                    ? getSecondaryJoinAndIdCondition(
                          pageOptionsDto.uniqueId,
                          pageOptionsDto.join
                      )
                    : {},
            ],
            queryJoin:
                pageOptionsDto.getOtherDetails === 'true'
                    ? getQueryJoin(pageOptionsDto.join)
                    : [],
        })
        console.log(pageOptionsDto.join)
        console.log(queryBuilder.getSql())

        queryBuilder = await orderBy(queryBuilder, pageOptionsDto)

        queryBuilder.skip(pageOptionsDto.skip)
        queryBuilder.take(pageOptionsDto.take)
        const raw = await queryBuilder.getManyAndCount()
        const pageMetaDto = new PageMetaDto({
            itemCount: raw[1],
            pageOptionsDto,
        })
        return new PageDto(raw[0], pageMetaDto)
    }
}
