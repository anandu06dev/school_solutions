import { Component, Inject, Input, OnInit } from '@angular/core'
import {
    MatBottomSheet,
    MatBottomSheetRef,
    MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet'
import { IToolBarMenu } from '@utils/interfaces/toolbarmenu.interface';
import { RootMenu } from '@utils/utility';
@Component({
    selector: 'app-student-bottom-sheet',
    templateUrl: './bottomsheets.component.html',
    styleUrls: ['./bottomsheets.component.scss'],
})
export class BottomsheetsComponent implements OnInit {
    _bottomSheet: boolean = false
  
    name: string = "";

    canEdit:boolean = false;
    viewType: 'table' | 'list' = 'list'
    renderData : { [label: string]: string }={}
    label :string= ''
    listIcon:boolean = false;
    router:any[] = RootMenu.length ? [...RootMenu] : []

    constructor(
        private bottomSheetRef: MatBottomSheetRef<BottomsheetsComponent>,
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: IShowTableOnBottomSheet
    ) {
    }
    
    ngOnInit(): void {
        this.router =this.modifiedQuickLinkOfRouter()
   
        if (this.data.viewType) {
            this.viewType = this.data.viewType
        }

        if(this.data.label){
            this.label = this.data.label
        }
        if(this.data.renderData){
            
            this.renderData = {...this.data.renderData}
            // this.name = `${this.renderData['studentFirstName']} ${this.renderData['studentLastName']}`
        }
    }

    clearBar(data:boolean): void {
        if(data){
            this.bottomSheetRef.dismiss({
                message: 'Cancel',
                data: this.data,
                admissionNo:this.data.data.admissionNo,
                id:this.data.data.id
            })
        }
        else{
            this.bottomSheetRef.dismiss();
        }
    }

    changeStatus() {
        this.bottomSheetRef.dismiss({
            message: 'Status',
            data: this.data,
        })
    }


    modifiedQuickLinkOfRouter(){
        
        let router = this.router.length>0 ? this.router.filter((i)=>{
            let exclude = ['siblings','dashboard','logout'];
            let item = i?.label?.toLowerCase() || ''
            if(!exclude.includes(item)) return i;
        }) : []
        return router;
    }

 

    toggleList(){
        this.listIcon = !this.listIcon
    }
}

export interface IShowTableOnBottomSheet {
    viewType: ViewType
    config?: { [key: string]: any }
    renderData:{ [key: string]: string }
    data: any
    label:string
}



export type ViewType = 'table' | 'list'
