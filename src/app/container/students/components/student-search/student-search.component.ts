import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IStudentSearchModel } from '@utils/interfaces/studentSearch.interface';
import { Observable, startWith, map, BehaviorSubject, take } from 'rxjs';
import { StudentapiService } from '../../services/studentapi.service';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.scss']
})
export class StudentSearchComponent implements OnInit {

  myControl = new FormControl();
  students = new BehaviorSubject<IStudentSearchModel[]>([])
  options$ = this.students.asObservable();
  // options: any[] = Array(100).fill(0).map((i,ind)=>({
  //     "admissionNo": ind,
  //     "studentFirstName": "Srinivasan" +(ind+1),
  //     "studentClass": "UKG",
  //     "studentLastName": "Raghunath"
  //   }))
  filteredOptions!: Observable<string[]>;
  constructor(private api:StudentapiService){}

  ngOnInit() {
  
    this.api.getStudentDetailsForSearch().pipe(take(1)).subscribe(d=>{
      console.log(d)
      if(Array.isArray(d)){

        this.students.next([...d])
      }else{
        this.students.next([])
      }
    })
  }
  
  getFreshStudentData(e:any){

  }


}
