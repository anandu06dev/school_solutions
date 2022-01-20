 export interface TableColumn
 {
    columnDef:string;
    header:string
    showCheckBox?:boolean
    isSortable?:boolean
    showAvatar?:boolean
    width?:number

 }

 export interface TableConfig{
   recycleRows?:boolean,
   showCheckBox?:boolean,
   showAvatar?:boolean,
   avatarKey?:string,
   multiSelect?:boolean,
   stickyColumn?:string,
 }