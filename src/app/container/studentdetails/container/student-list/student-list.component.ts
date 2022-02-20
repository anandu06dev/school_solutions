import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { ListConfig } from '@utils/interfaces/listConfig.interface';
import { Page } from '@utils/interfaces/page.meta';
import { Observable, Subscription, switchMap, take } from 'rxjs';
import { RouterString } from 'src/app/routerStringDeclaration';
import {
  IStudentDetailsCoreLogicFacade, StudentDetailsCoreLogicFacade,
} from '../../class/studentDetails.core.logic';
import { StudentDetailsFacade } from '../../services/students.facade';
import { studentList } from '../../util/student.util';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  providers: [AutoUnsubscribe],
})
export class StudentListComponent  extends StudentDetailsCoreLogicFacade implements IStudentDetailsCoreLogicFacade {
  public pagination$: Observable<Page>;
  public loadStudentDetails$: Observable<any>;
  _studentLists: any = [];
  listconfig: ListConfig = studentList;
  obs!: Observable<any>;
  itemSize: number = 10;

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
