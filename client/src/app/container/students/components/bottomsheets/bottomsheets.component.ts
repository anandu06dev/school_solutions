import { Component, Inject, Input, OnInit } from '@angular/core'
import {
    MatBottomSheet,
    MatBottomSheetRef,
    MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet'
@Component({
    selector: 'app-student-bottom-sheet',
    templateUrl: './bottomsheets.component.html',
    styleUrls: ['./bottomsheets.component.scss'],
})
export class BottomsheetsComponent implements OnInit {
    _bottomSheet: boolean = false
    @Input() set openBottomSheet(value: boolean) {}
    name!: string
    canEdit:boolean = false;
    viewType: 'table' | 'list' = 'list'
    renderData : { [label: string]: string }={}
    label :string= ''
  

    constructor(
        private bottomSheetRef: MatBottomSheetRef<BottomsheetsComponent>,
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: IShowTableOnBottomSheet
    ) {}

    ngOnInit(): void {
      console.log(this.data)
        if (this.data.viewType) {
            this.viewType = this.data.viewType
        }

        if(this.data.label){
            this.label = this.data.label
        }
        if(this.data.renderData){
          
          this.renderData = {...this.data.renderData}
        }
    }

    clearBar(): void {
        this.bottomSheetRef.dismiss({
            message: 'Cancel',
            data: this.data,
        })
    }

    changeStatus() {
        this.bottomSheetRef.dismiss({
            message: 'Status',
            data: this.data,
        })
    }

    updateListValue(){

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
