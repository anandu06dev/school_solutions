import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentDetails } from '@utils/interfaces/genericApiResponse.model';
import { initPage, Page } from '@utils/interfaces/page.meta';
import { IStudentDetails } from '@utils/interfaces/studentData';
import { buildParams, handleError } from '@utils/utility';
import {
  BehaviorSubject,
  catchError,
  concatMap,
  EMPTY,
  expand,
  finalize,
  map,
  mergeMap,
  of,
  reduce,
  tap,
} from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentapiService {
  private baseURL: string = environment.versionedApiUrl;

  private targetResource: string = 'student-details';
  private targetResource2: string = 'studentdetails';

  constructor(private http: HttpClient) {}

  getListOfStudentDetails(pageMetaData: Page = initPage): any {
    const params = buildParams(pageMetaData);

    return this.http
      .get(`${this.baseURL}/${this.targetResource}`, { params })
      .pipe(tap((d) => console.log(d)));
  }

  getStudentDetails = () =>
    this.http.get(`${this.baseURL}/${this.targetResource}`).pipe(
      map(
        (d: any) =>
          d.length &&
          d.map((i: IStudentDetails) => {
            i.id = i.admissionNo;
            return i;
          })
      ),
      catchError((e) => handleError(e))
    );
  getStudentDetails2 = () =>
    this.http
      .post(
        `${this.baseURL}/${this.targetResource}/pageable/${this.targetResource2}`,
        {
          order: 'ASC',
          page: 1,
          take: 10,
        }
      )
      .pipe(catchError((e) => handleError(e)));
  createStudentDetails = (stud: IStudentDetails) =>
    this.http
      .post(`${this.baseURL}/${this.targetResource}`, { ...stud })
      .pipe(catchError((e) => handleError(e)));

  updateStudentDetails = (stud: IStudentDetails) =>
    this.http
      .patch(`${this.baseURL}/${this.targetResource}/${stud.admissionNo}`, {
        ...stud,
      })
      .pipe(catchError((e) => handleError(e)));

  getStudentDetailsById = (aid: string) =>{

    const params = buildParams({aid});
   return this.http
      .get(`${this.baseURL}/${this.targetResource}`,{params})
      .pipe(catchError((e) => handleError(e)));
}

  getStudentDetailsForSearch = () =>
    this.http
      .post(`${this.baseURL}/${this.targetResource}/findByProjection`, {
        projectionId: [
          'studentFirstName',
          'studentLastName',
          'admissionNo',
          'studentClass',
        ],
        isActive: 1,
      })
      .pipe(catchError((e) => handleError(e)));
}
