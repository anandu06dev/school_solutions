export interface IAccess {
    access?: Access;
    util?:   Util;
}

export interface Access {
    read?:   boolean;
    write?:  boolean;
    update?: boolean;
    delete?: boolean;
}

export interface Util {
    isOptional?: boolean;
}
