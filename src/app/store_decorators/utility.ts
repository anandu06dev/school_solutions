import { error } from '@angular/compiler/src/util';
import { Action, reduxExtension } from './redux.extension';

export function updateStore(data: {
  store: any;
  setterValue: any;
  params: ISetState;
  decoratorName?:string
}) {
  try {
    let { store, setterValue, params,decoratorName }: any = data;
    let { key, concat, featureKey, action } = params;
    let { currentState } = store;
    let cloned = JSON.parse(JSON.stringify(currentState));
    if (
      !Object.keys(currentState)
        .map((i) => i.toLowerCase())
        .includes(featureKey.toLowerCase())
    ) {
      let err:string = `${featureKey} feature key was missing in the store`;
      if(decoratorName) err += ` while trying to use @${decoratorName}`
      throw (new TypeError(err));
    } else {
      let featureStoreModule = currentState[featureKey] ?? Object.create(null);
      // now need to add dynamically added keys to feature module and initialize with null values
      featureStoreModule[key] = null;
      let dataType: string = typeof setterValue;
      if (Array.isArray(setterValue)) dataType = 'array';

      /**
       * start logic for updated logics
       */

      switch (true) {
        case dataType == 'undefined' || dataType === null:
          featureStoreModule[key] = setterValue;
          break;

        case dataType === 'number' ||
          dataType === 'string' ||
          dataType === 'boolean':
          featureStoreModule[key] = setterValue;
          break;

        case dataType === 'array':
          featureStoreModule[key] = [...setterValue];
          if (concat && currentState[featureKey][key]) {
            featureStoreModule[key] = [
              ...cloned[featureKey][key],
              ...featureStoreModule[key],
            ];
          }
          break;

        case dataType === 'object':
          featureStoreModule[key] = {};
          if (concat && currentState[featureKey][key]) {
            featureStoreModule[key] = {
              ...cloned[featureKey][key],
              ...setterValue,
            };
          } else {
            featureStoreModule[key] = { ...setterValue };
          }
          break;

        default:
          break;
      }

      /**
       * end logic for updated logics
       **/

      currentState[featureKey] = featureStoreModule;
      store.dataSource.next({ ...store.currentState });
      //responsible for showing update status on redux dev tools
      let actions = action?.name
        ? { ...action }
        : { name: `[featureKey ${featureKey}] to ${[key]}` };
      reduxExtension.logActions(actions, store.currentState);
    }
  } catch (e:any) {
    // var trace = printStackTrace({e: e});
  //  if(!e.toString().includes('cloned'))
  //   console.error(e.stackTrace ?? e.stack);
    }
}

export const CreateAction = function (str: string) {
  return { name: str };
};
/**
 * @interface ISetState
 */
export interface ISetState {
  featureKey: string;
  key: string;
  action?: Action;
  concat?: boolean;
  useMethodResponse?: boolean;
}
/**
 * @interface IQuery
 */
export interface IQuery {
  featureKey: string;
  select?: string;
  deepNested?: boolean;
  separator?: string;
}
