import { Injectable } from '@angular/core';
import { Page, initPage } from '@utils/interfaces/page.meta';
import { IStudentDetails } from '@utils/interfaces/studentData';
import { Observable, take, tap } from 'rxjs';
import {
  CreateAction,
  Query,
  setStateByProp,
  StoreConfig,
} from 'src/app/store_decorators';
import { StudentapiService } from './studentapi.service';

export namespace ActionLabels {
  export const addNewStudentDetails = CreateAction(
    `[studentDetails StoreFeatureModule] Add new studentDetails`
  );
  export const addNewStudentPageDetails = CreateAction(
    `[studentDetails StoreFeatureModule] Add new studentDetails Page Info`
  );
  export const concatNewStudentdetails = CreateAction(
    `[studentDetails StoreFeatureModule] Concat new studentDetails`
  );
  export const studentPaginationData = CreateAction(
    `[studentDetails StoreFeatureModule] Upsert pagination for studentDetails`
  );
}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  featureKey: 'studentDetails',
})
export class StudentFacadeService {
  constructor(private api: StudentapiService) {}

  @Query({ featureKey: 'studentDetails', select: 'allStudentInfo' })
  selectAllStudentDetails!: Observable<IStudentDetails>;
  @Query({ featureKey: 'studentDetails', select: 'pagestudentdetails' })
  pageStudentDetails!: Observable<Page>;
  //init studetDetails
  @setStateByProp({
    featureKey: 'studentDetails',
    key: 'allStudentInfo',
    action: ActionLabels.addNewStudentDetails,
  })
  studentDetails: IStudentDetails[] = [];

  @setStateByProp({
    featureKey: 'studentDetails',
    key: 'studentLastPaginationData',
    action: ActionLabels.addNewStudentPageDetails,
  })
  paginationStudentDetails: Page = {};

  getStudentListFacade(page: Page = initPage) {
    return this.api.getListOfStudentDetails(page).pipe(
      tap((d: any) => {
        this.studentDetails = d.data;
        this.paginationStudentDetails = d.meta;
      })
    );
  }
  getBulkStudentDetails(){
    return this.api.getListOfStudentDetails({page:1,take:100000}).pipe(take(1)).subscribe((d:any)=>{
      this.studentDetails = d.data;
      this.paginationStudentDetails = d.meta;
    })
  }
}
