import { Component, OnInit, ViewChild } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ListConfig } from '@utils/interfaces/listConfig.interface';
import { Page } from '@utils/interfaces/page.meta';
import { IStudentDetails } from '@utils/interfaces/studentData';
import { Observable } from 'rxjs';
import { RouterString } from 'src/app/routerStringDeclaration';
import { IStudentDetailsCoreLogicFacade, StudentDetailsCoreLogicFacade } from '../../class/studentDetails.core.logic';
import {
  BottomsheetsComponent,
  IShowTableOnBottomSheet,
} from '../../components/bottomsheets/bottomsheets.component';
import { StudentDetailsFacade } from '../../services/students.facade';
import { studentList } from '../../util/student.util';

@Component({
  selector: 'app-student-grid',
  templateUrl: '/student-grid.component.html',
  styleUrls: ['./student-grid.component.scss'],
})
export class StudentGridComponent extends StudentDetailsCoreLogicFacade implements IStudentDetailsCoreLogicFacade {
  public pagination$: Observable<Page>;
  public loadStudentDetails$: Observable<any>;
  dataSource = new MatTableDataSource<IStudentDetails>([]);
  studentDetails: any;
  _studentLists: any = [];
  listconfig:ListConfig = studentList;
 itemSize=20;
  constructor(
    public facade: StudentDetailsFacade,
    public bottomSheet: MatBottomSheet,
    public router: Router
  ) {
    super();
    this.pagination$ = this.paginationData(this.facade);
    this.loadStudentDetails$ = this.loadStudentDetails(this.facade);
  }

  public openBottomSheet(student: any) {
    return this.abstractingOpenBottomSheet(student, this.bottomSheet, this.router)
  }

  public loadNextSetOfRecords() {
    return this.abstractingLoadNextSetOfRecords(this.facade)
  }
}
