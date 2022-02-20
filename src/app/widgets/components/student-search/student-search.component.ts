import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocalstorageService } from '@shared/services/localstorage.service';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { ListConfig } from '@utils/interfaces/listConfig';
import { initPage, Page } from '@utils/interfaces/page.meta';
import { IStudentSearchModel } from '@utils/interfaces/studentSearch.interface';
import {
  Observable,
  startWith,
  map,
  BehaviorSubject,
  take,
  debounceTime,
  takeUntil,
  Subject,
  filter,
  concatMap,
  retry,
  of,
  tap,
  EMPTY,
  takeWhile,
  expand,
  range,
  shareReplay,
} from 'rxjs';
import {
  StudentDetailsCoreLogicFacade,
  IStudentDetailsCoreLogicFacade,
} from 'src/app/container/studentdetails/class/studentDetails.core.logic';
import { StudentapiService } from 'src/app/container/studentdetails/services/studentapi.service';
import { StudentDetailsFacade } from 'src/app/container/studentdetails/services/students.facade';
import { studentList, studentListSearch } from 'src/app/container/studentdetails/util/student.util';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.scss'],
  providers: [AutoUnsubscribe],
})
export class StudentSearchComponent
  extends StudentDetailsCoreLogicFacade
  implements IStudentDetailsCoreLogicFacade
{
  public pagination$: Observable<Page>;
  public loadStudentDetails$: Observable<any>;
  listconfig: ListConfig = studentListSearch;

  myControl = new FormControl();
  students = new BehaviorSubject<IStudentSearchModel[]>([]);
  options$ = this.students.asObservable();
 
  filteredOptions!: Observable<string[]>;
  private studentDetails: any = {};

  @Output() selectedValueEvent = new EventEmitter<number | string>();
  constructor(
    private api: StudentapiService,
    private destroy$: AutoUnsubscribe,
    private storage: LocalstorageService,
    private facade: StudentDetailsFacade
  ) {
    super();
    this.pagination$ = this.paginationData(this.facade);
    this.loadStudentDetails$ = this.loadStudentDetails(this.facade);
  }

  ngOnInit() {
    this.myControl.valueChanges
      .pipe(debounceTime(100), takeUntil(this.destroy$))
      .subscribe((d) => {
        this.selectedValueEvent.emit(this.studentDetails[d]);
      });
  }

  
  public loadNextSetOfRecords() {
    return this.abstractingLoadNextSetOfRecords(this.facade);
  }
}
