import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { catchError, EMPTY, map, Observable, of, tap, throwError } from 'rxjs';
import { SiblingapiService } from './siblingapi.service';

@Injectable({
  providedIn: 'root',
})
export class SiblingResolver implements Resolve<boolean> {
  constructor(private api: SiblingapiService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    // console.log('Called Get Siblings in resolver...', route);
    return this.api.getAllSiblings().pipe(
      tap((d) => console.log(d)),
      map((itm: any) => {
        return itm.map((i:any)=>{
          i.siblingRelation = +i.siblingRelation === 1 ? 'Brother' : 'Sister';
          i.studentFirstName = i.studentDetails.studentFirstName;
          return i;

        })
      }),
      catchError((e) => {
        throw e;
      })
    );
  }
}

@Injectable({
  providedIn: 'root',
})
export class SiblingStudentBasedResolver implements Resolve<any> {
  constructor(private api: SiblingapiService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    console.log(route.paramMap.get('students'));
    let studentId = route.paramMap.get('students') || '';
    return this.api.getSiblingDetailBasedOnAdmissionId(studentId).pipe(
      tap((d) => console.log(d)),
      map((itm: any) => {
       return itm.map((i:any)=>{
          i.siblingRelation = +i.siblingRelation === 1 ? 'Brother' : 'Sister';
          i.studentFirstName = i.studentDetails.studentFirstName;
          return i;

        })
      }),
    );
  }
}
