import { Action, reduxExtension } from './redux.extension';
import { STORE } from './store.core';

/**
 * @param  Object - arg:{featureKey:string} *
 * @default Object - arg:{featureKey:"@@FeatureStore@@"} *
 * This decorator is used  to add first level of prop to entire state, prop value by default to set null *
 * @example @StoreConfig({featureKey:'abc'}) *
 * Now store would become {'abc':null}
 */
export function StoreConfig(
  arg: { featureKey: string; action?: Action }) {
  return function (target: Function):any {
    target.prototype.datasource = STORE.getInstance().dataSource
    target.prototype.state$ = STORE.getInstance().state$
    let { featureKey,action } = arg;
    let currentState = target?.prototype?.datasource?.getValue();
    if (!currentState){
      new Error(`Feature Key was missing int the store`)
    }
    else {
      target.prototype.datasource.next({
        ...currentState,
        ...(featureKey && { [featureKey]: null }),
      }); 
      if(action) action = {...action};
      else action =  { name: `[featureKey ${featureKey}] init with null` };
      reduxExtension.logActions(
        action,
        target?.prototype?.datasource?.getValue()
      );
    }
  };
}
