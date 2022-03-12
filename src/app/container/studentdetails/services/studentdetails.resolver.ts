import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import {
  catchError,
  map,
  Observable,
  of,
} from 'rxjs';
import { StudentapiService } from './studentapi.service';
@Injectable({
  providedIn: 'root',
})
export class StudentFormBasedResolver implements Resolve<boolean> {
  constructor(private api: StudentapiService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    let studentId = route.paramMap.get('admissionNo') || '';
    if (studentId) {
      return this.api.getStudentDetailsById(studentId).pipe(
        map((d:any) => {
          return d?.data && d.data.length > 0  ? d.data[0] : [];
        }),
        catchError((e) => {
          throw e;
        })
      );
    }
    else return of([])
  }
}
