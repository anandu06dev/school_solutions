import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStudentDetails } from '@utils/interfaces/studentData';
import {
  BehaviorSubject,
  catchError,
  EMPTY,
  map,
  Observable,
  Subject,
} from 'rxjs';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { deleteMentionedKeys, handleError } from '@utils/utility';
import { studentDetail } from '../models/studentDetail.model';
@Injectable({
  providedIn: 'root',
})
export class StudentapiService {
  private baseURL: string = 'http://localhost:3000';

  private targetResource: string = 'student-details';

  private students: BehaviorSubject<IStudentDetails[]> = new BehaviorSubject<
    IStudentDetails[]
  >([]);

  public readonly studentDetails$ = this.students.asObservable();

  public get studentDetails(): IStudentDetails[] {
    return this.students.getValue();
  }

  constructor(private http: HttpClient) {}

  public getStudentDetails() {
    let excludeKeys = ['cret_ts', 'LAST_UPDT_TS','studentIsActive'];
    return this.http.get(`${this.baseURL}/${this.targetResource}`).pipe(
      map((data: any) =>
        data.map((i: any) => ({
          ...studentDetail,
          ...deleteMentionedKeys(excludeKeys, i),
        }))
      ),
      catchError((e) => handleError(e))
    );
  }
}
