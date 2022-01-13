export enum Order {
    ASC = 'ASC',
    DESC = 'DESC',
}

export enum OrderByFields {
    CREATED_TIME_STAMP = 'createdTimeStamp',
    UPDATED_TIME_STAMP = 'updatedTimeStamp',
}

export enum RecordStatus {
    IsActive = '1',
    IsNotActive = '0',
}

export class StudentDetailsPrimaryJoin {
    static primaryJoin = 'student_details'
}

// export enum StudentDetailsPrimaryJoin {}

// export enum StudentDetailsPrimaryJoin {}

// export enum StudentDetailsPrimaryJoin {}

// export enum StudentDetailsPrimaryJoin {}

export enum JoinProjection {
    STUDENT_DETAILS = 'student_details',
    SIBLINGS = 'siblings',
    PARENTS = 'parents',
    FEES = 'fees',
    BUS_ROUTE_DETAILS = 'busRouteDetails',
    ADDRESSES = 'addresses',
}
