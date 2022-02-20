import { Injectable } from '@angular/core';
import { StudentapiService } from './studentapi.service';
import { initPage, Page } from '@utils/interfaces/page.meta';
import { EntityStore } from 'src/app/store/store.service';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentDetailsFacade {
  /**
   * 
   * @param api 
   * @param store 
   */
  constructor(private api: StudentapiService, private store: EntityStore) {}

  getStudentListFacade(page: Page = initPage) {
    return this.api.getListOfStudentDetails(page).pipe(tap((d: any) => this.loadToEntity(d)));
  }


  getBulkStudentDetails(){
    return this.api.getListOfStudentDetails({page:1,take:100000}).pipe(tap((d: any) => this.loadToEntity(d)))
  }
  loadStudentDetails(){
    return this.store.selectAllEntities()
  }

  getPaginationData():Observable<any>{
    return this.store.selectPaginationData()
  }

  loadToEntity(data:any){
    this.store.addEntites({entityId:'admissionNo',pageData:data.meta,action:{
      type:`Add new student details page ${data.meta.page} with record set ${data.meta.take}`,
      props:data?.data
    }})
  }
}

