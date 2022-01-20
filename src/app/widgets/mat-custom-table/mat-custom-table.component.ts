import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { TableButtonAction } from '@utils/interfaces/tableButtonAction';
import { TableColumn, TableConfig } from '@utils/interfaces/tableColumn';
import { CustomPaginator } from '@utils/utility';

@Component({
  selector: 'app-mat-custom-table',
  templateUrl: './mat-custom-table.component.html',
  styleUrls: ['./mat-custom-table.component.scss'],
  providers: [{ provide: MatPaginatorIntl, useValue: CustomPaginator() }],
})
export class MatCustomTableComponent implements OnInit, AfterViewInit {
  @ViewChild('tableContainer') container!: ElementRef;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @Output() action: EventEmitter<TableButtonAction> =
    new EventEmitter<TableButtonAction>();
  columns: Array<TableColumn> = [];
  tableConf: TableConfig = {};

  // @Input() columns!: Array<TableColumn>;
  @Input() set tableConfig(value: TableConfig) {
    if (value.avatarKey && value.showAvatar) {
      this.appendavatar();
    }
    value.multiSelect = true;
    if (value.multiSelect) {
      // this.appendCheckBox();
    }
    this.tableConf = { ...value };
  }
  @Input() set colDef(value: Array<TableColumn>) {
    this.columns = [...value];
    let reduced = value
      .map((i) => (i?.width ? i.width : 150)) //default width is 150px
      .reduce((acc: number, curr: number) => {console.log(curr);return acc + curr}, 0);
      console.log(reduced)
    this.updateWidth(reduced); // this pixels is connected to mat column default pixels
  }
  @Input() dataset: Array<any> = [];
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  dataSource!: MatTableDataSource<any>;
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = [];
  value!: string;
  dynamicWidth: number = 0;
  clickedRows = new Set<any>();
  @Output() emitSelectedRow = new EventEmitter();

  constructor() {}

  ngOnInit() {
    // set table columns
    this.displayedColumns = this.displayedColumns.concat(
      this.columns.map((x) => x.columnDef)
    ); // pre-fix static

    this.dataSource = new MatTableDataSource<any>(this.dataset);

    // set pagination
    this.dataSource.paginator = this.paginator;
  }

  onTableAction(e: TableButtonAction): void {
    this.action.emit(e);
  }
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    // console.log(this.container)
    // this.dynamicWidth = this.container.nativeElement.offsetWidth;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  appendCheckBox() {
    // set checkbox column

    this.displayedColumns.push('select');
  }

  appendavatar() {
    // set checkbox column

    this.displayedColumns.push('avatar');
  }

  appendActionBox() {
    // add action column
    this.displayedColumns.push('action');
  }

  isSticky(key: string) {
    if (this.tableConf.stickyColumn === key) return true;
    return false;
  }

  selectedRows(row: any) {
    let selectedRows;

    if (this.tableConf.multiSelect) {
      if (this.clickedRows.has(row)) {
        this.clickedRows.delete(row);
      } else {
        this.clickedRows.add(row);
      }
    } else {
      this.clickedRows.clear();
      this.clickedRows.add(row);
    }
    selectedRows = Array.from(this.clickedRows);
    this.emitSelectedRow.emit({ selectedRows });
  }

  selectedRowbck(row: any) {
    this.clickedRows.clear();
    this.clickedRows.add(row);
    let selectedRows;

    if (this.tableConf.multiSelect) {
      if (this.clickedRows.has(row)) {
        this.clickedRows.delete(row);
      } else {
        this.clickedRows.add(row);
      }
    }
    selectedRows = Array.from(this.clickedRows);
    // selectedRows = selectedRows[selectedRows.length-1]

    this.emitSelectedRow.emit({ selectedRows });
  }
  updateWidth(len: number) {
    this.dynamicWidth = len;
  }
}
