import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { IStudentDetails } from '@utils/interfaces/studentData';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IStudentSearchModel } from '@utils/interfaces/studentSearch.interface';
import { studentDetail } from '../../models/studentDetail.model';
import { IShowTableOnBottomSheet, BottomsheetsComponent } from '../../components/bottomsheets/bottomsheets.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { RouterString } from 'src/app/routerStringDeclaration';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
})
export class StudentTableComponent implements OnInit {
  studentDetails!: IStudentDetails[];
  constructor(private actRoute: ActivatedRoute, private bottomSheet: MatBottomSheet,private router:Router) {}

  displayedColumns: string[] = ['avatar', ...Object.keys(studentDetail)];
  dataSource = new MatTableDataSource<IStudentDetails>([]);
  clickedRows = new Set<IStudentDetails>();

  multiselect:boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  ngOnInit(): void {
    this.studentDetails = this.actRoute.snapshot?.data?.['students'] || [];
    this.dataSource = new MatTableDataSource<IStudentDetails>(
      this.studentDetails
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  selectedRows(row: IStudentDetails) {
    if(this.multiselect){
      if (this.clickedRows.has(row)) {
        this.clickedRows.delete(row);
      } else {
        this.clickedRows.add(row);
      }

    }else{
      this.clickedRows.clear()
      this.clickedRows.add(row);

    }
    this.openBottomSheet(row)
  }
  openBottomSheet(student: IStudentDetails) {
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
        this.router.navigateByUrl(`${RouterString.STUDENTS}/form/edit/${data?.admissionNo}`)
      }
    });
  }

  ngOnDestroy() {
    if (this.dataSource) {
      this.dataSource.disconnect();
    }
  }
}
