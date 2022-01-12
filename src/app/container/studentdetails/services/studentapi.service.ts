import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IStudentDetails } from '@utils/interfaces/studentData';
import { handleError } from '@utils/utility';
import { catchError, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StudentapiService {
  private baseURL: string = environment.apiUrl;

  private targetResource: string = 'student-details';
  private targetResource2: string = 'studentdetails';

  constructor(private http: HttpClient) {}

  getStudentDetails= () =>
    this.http
      .get(`${this.baseURL}/${this.targetResource}`)
      .pipe(catchError((e) => handleError(e)));
  getStudentDetails2 = () =>
    this.http
      .post(`${this.baseURL}/${this.targetResource}/pageable/${this.targetResource2}`, {
        order: 'ASC',
        page: 1,
        take: 10,
      })
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

  getStudentDetailsById = (studId: string) =>
    this.http
      .get(`${this.baseURL}/${this.targetResource}/${studId}`)
      .pipe(catchError((e) => handleError(e)));

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
