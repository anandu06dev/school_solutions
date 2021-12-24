import { Component, Input } from '@angular/core'
import { MatBottomSheet } from '@angular/material/bottom-sheet'
import { listAnimation } from '@utils/animations'
import { BottomsheetsComponent, IShowTableOnBottomSheet } from '../bottomsheets/bottomsheets.component'


@Component({
    selector: 'app-list-view',
    templateUrl: './listview.component.html',
    styleUrls: ['./listview.component.scss'],
    animations: [listAnimation],
})
export class ListviewComponent  {
    _studentLists: any = []

    

    @Input() trackScreenView: any = ''

    @Input() set studentListsData(value: any) {
        console.log(value)
        this._studentLists = [...value]
    }
    @Input() studentLists = []
    constructor(private bottomSheet: MatBottomSheet) {}

    

    openBottomSheet(student:any) {
      let forBottomSheet:IShowTableOnBottomSheet;
   
  
      let sheetRef =  this.bottomSheet.open(BottomsheetsComponent, {
        data: {
          viewType:'list',
          renderData:{...student},
          data:{...student},
          label:'Student lists'
        }
      });
      // sheetRef.afterDismissed().subscribe( data => {
      //   console.log('after close data :', data);
      //   if(data && data.message=='Cancel') {
      //     alert('Cancel was clicked in bottomsheet');
      //   } if(data && data.message=='Status') {
      //     alert('Change Status was clicked in bottomsheet');
      //   }
      // });
    }

  
}