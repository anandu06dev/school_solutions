import { Injectable } from '@angular/core';
import { IStudentDetails } from '@utils/interfaces/studentData';
import { Observable } from 'rxjs';
import { Query } from 'src/app/store_decorators';

@Injectable({
  providedIn: 'root'
})
export class DashboardFacadeService {

  @Query({ featureKey: 'studentDetails', select: 'allStudentInfo' })
  selectAllStudentDetails!: Observable<IStudentDetails>;

  constructor() { }
}
