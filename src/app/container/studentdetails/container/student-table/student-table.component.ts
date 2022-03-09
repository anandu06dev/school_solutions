import { OnInit, Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from '@utils/interfaces/page.meta';
import { TableColumn, TableConfig } from '@utils/interfaces/tableColumn';
import { generateTableColumnHeader } from '@utils/utility';
import { TableConsts } from '@widgets/mat-custom-table/consts/table';
import { delay, Observable, switchMap, take, tap } from 'rxjs';
import { RouterString } from 'src/app/routerStringDeclaration';
import {
  IStudentDetailsCoreLogicFacade,
  StudentDetailsCoreLogicFacade,
} from '../../class/studentDetails.core.logic';
import { studentDetail } from '../../models/studentDetail.model';
import { StudentFacadeService } from '../../services/students.facade.service';
import { StudentDetailsFacade } from '../../services/students.facade_bck';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
})
export class StudentTableComponent
  extends StudentDetailsCoreLogicFacade
  implements IStudentDetailsCoreLogicFacade
{
  public pagination$: Observable<Page>;
  public loadStudentDetails$: Observable<any>;
  columns = generateTableColumnHeader(Object.keys(studentDetail));
  tableConf: TableConfig = {
    showAvatar: true,
    showCheckBox: false,
    avatarKey: 'studentFirstName',
    stickyColumn: 'studentFirstName',
  };

  data: any[] = [];

  constructor(
    public facade: StudentFacadeService,
    public bottomSheet: MatBottomSheet,
    public router: Router
  ) {
    super();
    this.pagination$ = this.paginationData(this.facade);
    this.loadStudentDetails$ = this.loadStudentDetails(this.facade);
  }

  public openBottomSheet(student: any) {
    return this.abstractingOpenBottomSheet(
      student,
      this.bottomSheet,
      this.router
    );
  }

  public loadNextSetOfRecords() {
    return this.abstractingLoadNextSetOfRecords(this.facade);
  }

  changeInPaginatedData(temp1: any) {
    let nextRecord =
      temp1.pageSize < temp1.length - temp1.pageIndex * temp1.pageSize
        ? false
        : true;
    if (nextRecord) return this.loadNextSetOfRecords();
    else return
  }
  onTableAction(e: any) {}
}
