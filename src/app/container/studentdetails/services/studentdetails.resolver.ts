import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { StudentapiService } from './studentapi.service';

@Injectable({
  providedIn: 'root',
})
export class StudentdetailsResolver implements Resolve<boolean> {
  constructor(private api: StudentapiService){}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.api.getStudentDetails().pipe(catchError((e) =>{throw e}));
  }
}

@Injectable({
  providedIn: 'root',
})
export class StudentFormBasedResolver implements Resolve<boolean> {
  constructor(private api: StudentapiService){}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    let studentId = route.paramMap.get('admissionNo') || ''
  
    return this.api.getStudentDetailsById(studentId).pipe(catchError((e) =>{throw e}));
  }
}
