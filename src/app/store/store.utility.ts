import { Action } from "@utils/interfaces/action.interface";
import { Page, initPage } from "@utils/interfaces/page.meta";
import { BehaviorSubject } from "rxjs";

export namespace StoreUtility {
  export function deleteEntities(uniqueEntityId: any, temp: any) {
    let dynamicEntityId = Object.keys(temp)[0];
    temp['entities'][uniqueEntityId] = null;
    delete temp['entities'][uniqueEntityId];
    temp[dynamicEntityId] = temp[dynamicEntityId].filter(
      (item: string | number) => item != uniqueEntityId
    );
    return temp;
  }

  export function addNewEntity(newEntity: any, temp: any) {
    let { entityId, pageData, action } = newEntity;
    let data = action?.props;
    if (!Object.keys(temp).length) {
      temp = { [entityId]: [], entities: {}, paginationData: {} };
    }
    let dataSource = Array.isArray(data)
      ? arrayOfObjToEntity(data, entityId, pageData)
      : { ids: [], entities: [], paginationData: {} };
    let dynamicEntityId = Object.keys(temp)[0];
    temp[dynamicEntityId] = [
      ...temp[dynamicEntityId],
      ...dataSource[dynamicEntityId],
    ];
    temp[dynamicEntityId] = [...new Set(temp[dynamicEntityId])];
    temp['entities'] = { ...temp['entities'], ...dataSource['entities'] };
    if (pageData) {
      temp['paginationData'] = { ...temp['paginationData'], ...pageData };
    }

    return {temp,action}
  }

  export function arrayOfObjToEntity( data: { [key: string]: any }[] | null = [],
    entityId: string,
    paginationData?: Page):{ [entityId: string]: any } {
    let temp: { [key: string]: [] | { [key: string | number]: any } } = {
      [entityId]: [],
      entities: {},
      paginationData: initPage,
    };
    if (!data) {
      return temp;
    }
    for (let item of data) {
      const entity = item[entityId];
      temp[entityId].push(entity);
      temp['entities'][entity] = item;
    }
    if (paginationData) {
      temp['paginationData'] = paginationData;
    }
    return temp;
  }

  export const actions = (data: Action): Action => {
    let temp: { [key: string]: any } = { ...data };
    if (data.props) temp['props'] = data.props;
    else temp['props'] = null;
    return temp as Action;
  };



}

export class Datasource{
  public dataSource = new BehaviorSubject({});
  public STORE = '__ENTITY_STORE__';
}

class ReduxExtension {
  private get extensionHandle() {
    return (<any>window).__REDUX_DEVTOOLS_EXTENSION__;
  }
  private state: { [key: string]: any } = {};

  public logActions(action: Action, entity: string, value: any) {
    this.state[entity] = value;
    const actionName = action.type;
    this.extensionHandle.send(actionName, this.state);
  }
}
export const reduxExtension = new ReduxExtension();