import { Injectable } from '@angular/core';
import { MyDB } from '@utils/interfaces/dbSchema.interface';
import { IDBPDatabase, openDB } from 'idb';

type NewType = keyof MyDB;

@Injectable({
  providedIn: 'root',
})
export class IndexDbService {
  version = 1;
  databaseName = 'pwa-school-sols';
  dbConn: any;
  trans: any;
  constructor() {}

  async connectToDb() {
    let trans: any;
    this.dbConn = await openDB(this.databaseName, this.version, {
      upgrade:(db, oldVersion, newVersion, transaction) => {
        db.createObjectStore('offline-action');
        this.trans = transaction.objectStore('offline-action');
      },
    });
  }

  async upsertItem(key: any, value: any) {
    this.dbConn.put('offline-action', false, 'delivered');
  }

  async deleteItem() {
    const store = this.trans.objectStore('offline-action');
  }
}
