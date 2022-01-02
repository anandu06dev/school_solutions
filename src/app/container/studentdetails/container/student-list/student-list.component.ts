import { Component, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudentDetails } from '@utils/interfaces/studentData';
import { Observable } from 'rxjs';
import { RouterString } from 'src/app/routerStringDeclaration';
import {
  BottomsheetsComponent,
  IShowTableOnBottomSheet,
} from '../../components/bottomsheets/bottomsheets.component';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  dataSource = new MatTableDataSource<IStudentDetails>([]);
  studentDetails: any;
  _studentLists: any = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  obs!: Observable<any>;

  constructor(
    private actRoute: ActivatedRoute,
    private router:Router,
    private bottomSheet: MatBottomSheet
  ) {}

  ngOnInit(): void {
    this.studentDetails = this.actRoute.snapshot?.data?.['students'] || [];
    this.dataSource = new MatTableDataSource<IStudentDetails>(
      this.studentDetails
    );
    this.obs = this.dataSource.connect();
    this.dataSource.paginator = this.paginator;
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
