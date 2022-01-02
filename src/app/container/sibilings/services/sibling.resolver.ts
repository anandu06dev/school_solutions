import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { catchError, EMPTY, Observable, of, throwError } from 'rxjs';
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
    let studentId = route.paramMap.get('students') || ''
    return this.api.getSiblingDetailBasedOnAdmissionId(studentId);
  }
}
