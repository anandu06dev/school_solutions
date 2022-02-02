export interface StudentDetails {
    data?: GenericData[];
    meta?: PageMetaData;
}

export interface GenericData {
    createdTimeStamp?:      null;
    admissionNo?:           string;
    admissionDate?:         Date;
    studentFirstName?:      string;
    studentClass?:          string;
    studentLastName?:       string;
    studentFatherName?:     string;
    studentMotherName?:     string;
    studentGender?:         string;
    studentDOB?:            Date;
    studentCaste?:          string;
    studentSubCaste?:       string;
    studentCommunity?:      string;
    studentReligion?:       string;
    studentNationality?:    string;
    studentMotherToungue?:  string;
    studentLangaugeKnown?:  string;
    studentBloodGroup?:     string;
    studentAadharNumber?:   string;
    studentEMINo?:          string;
    studentPreviousSchool?: string;
    studentDiscount?:       number;
    studentIsActive?:       number;
    siblings?:              any[];
    parents?:               any[];
    fees?:                  any[];
    busRouteDetails?:       any[];
    addresses?:             any[];
}

export interface PageMetaData {
    page?:            number;
    take?:            number;
    itemCount?:       number;
    pageCount?:       number;
    hasPreviousPage?: boolean;
    hasNextPage?:     boolean;
}
