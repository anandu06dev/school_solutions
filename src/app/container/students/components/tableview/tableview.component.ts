import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import PerfectScrollbar from 'perfect-scrollbar';
import { StudentDatashareService } from '../../services/student-datashare.service';
import {
  IShowTableOnBottomSheet,
  BottomsheetsComponent,
} from '../bottomsheets/bottomsheets.component';

@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.scss'],
})
export class TableviewComponent {
  @Input() defaultColDef: any = {
    // enableRowGroup: true,
    // enablePivot: true,
    // enableValue: true,
    // sortable: true,
    filter: true,
    // resizable: true,
  };
  @Input() columnDefinition: any = [];
  @Input() rowSelection: any = [];
  @Input() rowData: any = [];
  @Input() rowSelectionForGrid: 'single' | 'multiple' = 'single';
  gridApi: any;
  gridColumnApi: any;
  domLayout: 'autoheight' = 'autoheight';
  _style: any;
  @Input() set tableStyle(value: { width?: number; height?: number }) {
    if (value) {
      let temp: any = {};
      if (value.width) temp['width.%'] = value.width;
      if (value.height) temp['height.px'] = value.height;
      this._style = {
        ...this._style,
        ...temp,
      };
    }
  }
  constructor(
    private bottomSheet: MatBottomSheet,
    private dataShare: StudentDatashareService
  ) {}

  onGridReady(params: any) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    // this.gridApi.sizeColumnsToFit()
    this.setAutoHeightAndScroll();
  }

  onPinnedRowTopCount() {
    // var headerRowsToFloat = document.getElementById('top-row-count').value;
    // var count = Number(headerRowsToFloat);
    // var rows = createData(count, 'Top');
    // this.gridApi.setPinnedTopRowData(rows);
  }

  setAutoHeightAndScroll() {
    this.gridApi.setDomLayout('autoHeight');
    let studentGrid: HTMLDivElement | null = document.querySelector('#myGrid');
    if (studentGrid) {
      // studentGrid.style.height = '';
      const ps = new PerfectScrollbar(studentGrid);
      ps.update();
    }
  }
  onSelectionChanged(event: any) {
    var selectedRows = this.gridApi.getSelectedRows();
    this.openBottomSheet(selectedRows[0])
  }

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
        this.dataShare.updateSingleStudentDetails(data);
        this.dataShare.updateFlag(true);
        this.dataShare.tabindex = 2
      }
    });
  }
}
