import { Injectable } from '@angular/core';
import { IStudentDetails } from '@utils/interfaces/studentData';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentDatashareService {
  // private studentDetails: BehaviorSubject<IStudentDetails[]> =
  //   new BehaviorSubject<IStudentDetails[]>([]);
  // private singleStudentDetails: BehaviorSubject<IStudentDetails> =
  //   new BehaviorSubject<IStudentDetails>(studentDetail);
  // private updateOperation: BehaviorSubject<boolean> =
  //   new BehaviorSubject<boolean>(false);
  // public readonly studentDeatils$: Observable<IStudentDetails[]> =
  //   this.studentDetails.asObservable();
  // public readonly updateOperation$: Observable<boolean> =
  //   this.updateOperation.asObservable();

  // public readonly singleStudentDetails$: Observable<IStudentDetails> =
  //   this.singleStudentDetails.asObservable();

  // private _tabIndex: BehaviorSubject<0|1|2|3|4> = new BehaviorSubject<0|1|2|3|4>(1);

  // set tabindex(value:0|1|2|3|4){
  //   this._tabIndex.next(value)
  // }

  // get tabIndex$(){
  //   return this._tabIndex.asObservable()
  // }
  // constructor() {}

  // public updateAllStudentDetails(value: IStudentDetails[]): void {
  //   this.studentDetails.next(value);
  // }
  // public updateSingleStudentDetails(value: IStudentDetails): void {
  //   this.singleStudentDetails.next(value);
  // }
  // public updateFlag(value: boolean): void {
  //   this.updateOperation.next(value);
  // }
}
