import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocalstorageService } from '@shared/services/localstorage.service';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
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
} from 'rxjs';
import { StudentapiService } from 'src/app/container/students/services/studentapi.service';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.scss'],
  providers: [AutoUnsubscribe],
})
export class StudentSearchComponent implements OnInit {
  myControl = new FormControl();
  students = new BehaviorSubject<IStudentSearchModel[]>([]);
  options$ = this.students.asObservable();
  // options: any[] = Array(100).fill(0).map((i,ind)=>({
  //     "admissionNo": ind,
  //     "studentFirstName": "Srinivasan" +(ind+1),
  //     "studentClass": "UKG",
  //     "studentLastName": "Raghunath"
  //   }))
  filteredOptions!: Observable<string[]>;


 

  @Output() selectedValueEvent = new EventEmitter<number | string>();
  constructor(
    private api: StudentapiService,
    private destroy$: AutoUnsubscribe,
    private storage: LocalstorageService
  ) {}

  ngOnInit() {
    // this.getFreshStudentData();
    this.students.next([]);

    this.myControl.valueChanges
      .pipe(debounceTime(100), takeUntil(this.destroy$))
      .subscribe((d) => {
      this.selectedValueEvent.emit(d)
      });
  }

  getFreshStudentData() {

    if(this.students.getValue().length === 0){

      this.api
        .getStudentDetailsForSearch()
        .pipe(take(1))
        .subscribe((d) => {
          if (Array.isArray(d)) {
            this.students.next([...d]);
          } else {
            this.students.next([]);
          }
        });
    }
  }
}
