import { Inject, Injectable, InjectionToken } from '@angular/core';
import { Action } from '@utils/interfaces/action.interface';
import { initPage, Page } from '@utils/interfaces/page.meta';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, map, pluck, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Datasource, reduxExtension, StoreUtility } from './store.utility';

@Injectable({ providedIn: 'root' })
export class EntityStore extends Datasource {
  // private storeConfig: StoreConfig;
  constructor() {
    super();
   
  }

  public convertArrayOfObjectToEntity(
    data: { [key: string]: any }[] | null = [],
    entityId: string,
    paginationData?: Page
  ): { [entityId: string]: any } {
    return StoreUtility.arrayOfObjToEntity(data, entityId, paginationData);
  }

  public convertentitiesToObject(data: { [key: string]: any; entities: {} }) {
    return data?.entities ? Object.values(data.entities) : {};
  }

  /**
   * start of entities update for level one
   */

  /**
   * bare entity for Creation
   * example input [{name:'abc',id:1},{name:'xyz',id:2}]
   * expected output altered in store {id:[1,2],entites:{1:{name:'abc',id:1},2:{name:'xyz',id:2}}}
   */

  public addEntites(
    data: { entityId: string; pageData?: Page; action?: Action } = {
      entityId: 'id',
      pageData: initPage,
      action: { type: '@@Actions', props: null },
    }
  ) {
    let updatedData = StoreUtility.addNewEntity(
      data,
      this.dataSource.getValue()
    );
    let { temp, action } = updatedData;
    if (action) {
      this.logActions(action);
    }
    this.dataSource.next(temp);
  }

  /**
   * entity for updation needed entity id, and needed key for nextLevel updation
   * example input '1',{name:'were',id:1}
   * expected output altered in store {id:[1,2],entites:{1:{name:'were',id:1},2:{name:'xyz',id:2}}}
   */
  public updateEntities(
    uniqueEntityId: string | number,
    data: { [key: string]: any }
  ) {
    let temp: any = this.dataSource.getValue();
    temp['entities'][uniqueEntityId] = data;
    this.dataSource.next(temp);
  }
  /**
   * entity for deletion
   * example input '1'
   * expected output altered in store {id:[2],entites:{2:{name:'xyz',id:2}}}
   */
  public deleteEntities(uniqueEntityId: string | number) {
    let updatedData = StoreUtility.deleteEntities(
      uniqueEntityId,
      this.dataSource.getValue()
    );
    this.dataSource.next(updatedData);
  }

  /**
   * end of entities update for level one
   */

  /**
   * select all
   *
   */

  public logActions(action: Action) {
    if (!environment.production)
      reduxExtension.logActions(action,this.STORE, this.dataSource.getValue());
  }

  public selectAll() {
    return this.dataSource.asObservable();
  }

  public selectEntitiesIdOnly() {
    let temp = Object.keys(this.dataSource.getValue())[0];
    return this.dataSource.asObservable().pipe(pluck(temp));
  }
  public selectPaginationData() {
    return this.dataSource.asObservable().pipe(pluck('paginationData'));
  }

  public selectAllEntities() {
    return this.dataSource.asObservable().pipe(
      pluck('entities'),
      map((d: any) => {
        return typeof d === 'object' ? Object.values(d) : [];
      })
    );
  }
}

@Injectable({
  providedIn: 'root',
})
export class StoreConfig{
    name: string = "ENTITY_STORE";
}
