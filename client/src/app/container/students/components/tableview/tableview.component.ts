import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import PerfectScrollbar from "perfect-scrollbar"

@Component({
  selector: 'app-tableview',
  templateUrl: './tableview.component.html',
  styleUrls: ['./tableview.component.scss']
})
export class TableviewComponent implements OnInit {
  
  @Input() defaultColDef: any  = {
    // enableRowGroup: true,
    // enablePivot: true,
    // enableValue: true,
    // sortable: true,
    filter: true,
    // resizable: true,
  };
  @Input() columnDefinition:any=[];
  @Input() rowSelection: any = [];
  @Input() rowData: any = [];
  @Input() rowSelectionForGrid : 'single' |'multiple' = 'single'
  gridApi: any;
  gridColumnApi: any;
  domLayout:'autoheight' = 'autoheight'
  _style: any;
  @Input() set tableStyle(value: { width?: number; height?: number }) {
    if (value) {
      let temp: any = {};
      if (value.width) temp['width.%'] = value.width
      if (value.height) temp['height.px'] = value.height
      this._style = {
        ...this._style,
        ...temp
      };
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(change:SimpleChange){
    console.log(change)
    // this.gridApi.setColumnDefs(change?.currentValue?);
    // this.gridApi.setRowData(change?.currentValue);
  }

  onSelectionChanged(event: any) {
    let selectedNodes = this.gridApi.getSelectedNodes();
  }
  
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
    let studentGrid:HTMLDivElement | null= document.querySelector('#myGrid');
    if(studentGrid){
      // studentGrid.style.height = '';
      const ps = new PerfectScrollbar(studentGrid);
      ps.update();
    }
  }

}
