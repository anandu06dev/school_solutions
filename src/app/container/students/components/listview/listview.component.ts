import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { listAnimation } from '@utils/animations';
import { StudentDatashareService } from '../../services/student-datashare.service';
import {
  BottomsheetsComponent,
  IShowTableOnBottomSheet,
} from '../bottomsheets/bottomsheets.component';

@Component({
  selector: 'app-list-view',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss'],
  animations: [listAnimation],
})
export class ListviewComponent {
  _studentLists: any = [];

  @Output() forUpdate: any = new EventEmitter();
  @Output() isUpdate = new EventEmitter<boolean>();

  @Input() trackScreenView: any = '';

  @Input() set studentListsData(value: any) {
    this._studentLists = [...value];
  }
  @Input() studentLists = [];
  constructor(
    private bottomSheet: MatBottomSheet,
    private dataShare: StudentDatashareService
  ) {}




  openBottomSheet(student: any) {
    let forBottomSheet: IShowTableOnBottomSheet;

    let sheetRef = this.bottomSheet.open(BottomsheetsComponent, {
      data: {
        viewType: 'list',
        renderData: { ...student },
        data: { ...student },
        label: 'Student lists',
      },
    });
    sheetRef.afterDismissed().subscribe((data) => {
      if (data) {
        // this.dataShare.updateSingleStudentDetails(data);
        // this.dataShare.updateFlag(true);
        // this.dataShare.tabindex = this.trackScreenView
        //   .toLowerCase()
        //   .includes('small')
        //   ? 1
        //   : 2;
      }
    });
  }
}
