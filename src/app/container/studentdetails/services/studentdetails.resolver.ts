import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { initPage } from '@utils/interfaces/page.meta';
import {
  catchError,
  concat,
  concatMap,
  delay,
  map,
  Observable,
  of,
  tap,
} from 'rxjs';
import { StudentapiService } from './studentapi.service';
import { StudentFacadeService } from './students.facade.service';
import { StudentDetailsFacade } from './students.facade_bck';

@Injectable({
  providedIn: 'root',
})
export class StudentdetailsResolver implements Resolve<boolean> {
  constructor(private facade: StudentFacadeService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    // return this.facade.getStudentListFacade(initPage).pipe(
    //   map((d: any) => (d?.data ? d.data : [])),
    //   concatMap((data: any) => {
    //     initPage.page = 2;
    //     return this.facade
    //       .getStudentListFacade(initPage)
    //       .pipe(map((d: any) => (d?.data ? d.data : [])));
    //   })
    // );
    return this.facade.getStudentListFacade(initPage);
  }
}

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
