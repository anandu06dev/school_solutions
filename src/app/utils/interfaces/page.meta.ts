

export interface Page {
    page?:            number;
    take?:            number;
    itemCount?:       number;
    pageCount?:       number;
    hasPreviousPage?: boolean;
    hasNextPage?:     boolean;
}

export const initPage:Page = {
page:1,
take:10,
}