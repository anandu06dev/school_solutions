import { Injectable } from "@angular/core";
import { pluck, map } from "rxjs";
import { Datasource } from "./store.utility";



@Injectable({
    providedIn:'root'
  })
  export class Selector extends Datasource{
    constructor(){
      super()
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