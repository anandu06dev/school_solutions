import { DBSchema } from 'idb';

export interface MyDB extends DBSchema {
  'offline-action': {
    key: string;
    value:any
  };
}
