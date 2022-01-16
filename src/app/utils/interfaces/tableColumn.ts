 export interface TableColumn
 {
    columnDef:string;
    header:string
    showCheckBox?:boolean
    isSortable?:boolean
    showAvatar?:boolean
    avatarString?:string

 }

 export interface TableConfig{
   recycleRows?:boolean,
   showCheckBox?:boolean,
   showAvatar?:boolean,
   avatarKey?:string,
   multiSelect?:boolean,
   stickyColumn?:string,
 }