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
    return this.api.getListOfStudentDetails(page).pipe(
      tap((d: any) => {
        this.store.addEntites({entityId:'admissionNo',pageData:d.meta,action:{
          type:`Add new student details page ${d.meta.page}`,
          props:d?.data
        }})
      })
    );
  }

  loadStudentDetails(){
    return this.store.selectAllEntities()
  }

  getPaginationData():Observable<any>{
    return this.store.selectPaginationData()
  }
}

