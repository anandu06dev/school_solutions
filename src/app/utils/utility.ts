import { Breakpoints } from '@angular/cdk/layout';
import { Observable, defer, isObservable, of, throwError } from 'rxjs';
import { shareReplay, first, mergeMap } from 'rxjs/operators';

import {
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { HotToastService } from '@ngneat/hot-toast';
import { LocalstorageService } from '@shared/services/localstorage.service';
import { EMPTY } from 'rxjs';
import { RouterString } from '../routerStringDeclaration';
import { INavTabMenu } from './interfaces/navTabMenu.interface';
import { IToolBarMenu } from './interfaces/toolbarmenu.interface';
import { studentDetail } from '../container/studentdetails/models/studentDetail.model';
import { TableColumn, TableConfig } from './interfaces/tableColumn';
import { MatPaginatorIntl } from '@angular/material/paginator';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    // console.log(control)
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

export function deleteMentionedKeys(
  keys: string[],
  obj: { [key: string]: any }
): { [key: string]: any } {
  let temp = keys.map((i) => i.toLowerCase());
  return Object.fromEntries(
    Object.entries(obj).filter((item: any) => {
      if (!temp.includes(item[0].toLowerCase())) return item;
    })
  );
}

export function handleError(e: any) {
  // console.log(e)
  return of(false);
}

export function ConfirmedValidator(
  controlName: string,
  matchingControlName: string
) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (
      matchingControl.errors &&
      !matchingControl.errors['confirmedValidator']
    ) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ confirmedValidator: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}

export const initTabMenuData = [
  {
    label: 'table',
    url: '/table',
    icon: 'table_view',
    hideOnSmallDevice: true,
  },
  { label: 'list', url: '/list', icon: 'list_view', hideOnSmallDevice: false },
  { label: 'grid', url: '/grid', icon: 'grid_view', hideOnSmallDevice: false },

  {
    label: 'form',
    url: '/form/new',
    icon: 'fact_check',
    hideOnSmallDevice: false,
  },
];

/**
 * enum for views deatils
 *
 */

export const screenObserve: string[] = [
  Breakpoints.XSmall,
  Breakpoints.Small,
  Breakpoints.Medium,
  Breakpoints.Large,
  Breakpoints.XLarge,
];
export const currentViewMapTable = new Map([
  [Breakpoints.XSmall, 'XSmall'],
  [Breakpoints.Small, 'Small'],
  [Breakpoints.Tablet, 'Tablet'],
  [Breakpoints.Medium, 'Medium'],
  [Breakpoints.Large, 'Large'],
  [Breakpoints.XLarge, 'XLarge'],
]);

/**
 * This tab menu helper function can even be changed on future basd on requirements
 *
 */
export const loadResponsiveTabMenu = (currentView?: string): INavTabMenu[] => {
  if (!currentView) return initTabMenuData;
  if (currentView?.toLowerCase().includes('small')) {
    return initTabMenuData.filter(
      (tab: INavTabMenu) => !tab.hideOnSmallDevice && tab
    );
  }
  return initTabMenuData;
};

export const headerPositionOnsmallScreen = (
  currentView?: string
): 'below' | 'above' =>
  currentView?.toLowerCase().includes('small') ? 'below' : 'above';

export const listInitSubData = {
  label: '',
  key: '',
  secKey: '',
  show: false,
  trim:0
};

export const RootMenu: IToolBarMenu[] = [
  {
    label: 'Dashboard',
    icon: 'view_module',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: false,
    url: `/${RouterString.DASHBOARD}`,
  },
  {
    label: 'Students',
    icon: 'person',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: false,
    url: `/${RouterString.STUDENTS}`,
  },
  {
    label: 'Fees',
    icon: 'assessment',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: false,
    url: `/${RouterString.FEES}`,
  },
  {
    label: 'Parents',
    icon: 'wc',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: false,
    url: `/${RouterString.PARENTS}`,
  },
  {
    label: 'Siblings',
    icon: 'people',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: false,
    url: `/${RouterString.SIBILINGS}`,
  },
  {
    label: 'Bus Route',
    icon: 'directions_bus',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: false,
    url: `/${RouterString.BUSROUTE}`,
  },
  {
    label: 'Address',
    icon: 'import_contacts',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: false,
    url: `/${RouterString.ADDRESS}`,
  },
  {
    label: 'Logout',
    icon: 'logout',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: false,
    url: `/${RouterString.LOGOUT}`,
  },
];
export const dateHelper = (timeStamp: number) =>
  new Date(timeStamp).toISOString().split('T')[0];

export const generateBloodGroup = () => {
  return [
    { label: 'A +ve', value: 'A +ve' },
    { label: 'A -ve', value: 'A -ve' },

    { label: 'B +ve', value: 'B +ve' },
    { label: 'B -ve', value: 'B -ve' },
    { label: 'AB +ve', value: 'AB +ve' },
    { label: 'AB -ve', value: 'AB -ve' },

    { label: 'O +ve', value: 'O +ve' },
    { label: 'O -ve', value: 'O -ve' },
  ];
};

export const generateStudentClass = (): any => {
  let studentClass: string[] = ['preKG', 'LKG', 'UKG'];
  return Array(15)
    .fill(0)
    .map((item, index) => {
      if (index <= 2) {
        return { label: studentClass[index], value: studentClass[index] };
      }
      return { label: `class ${index - 2}`, value: index - 2 };
    });
};

let returnObs$: Observable<any>;
const createReturnObs = (
  obs: Observable<any>,
  time: number,
  bufferReplays: number
) => (returnObs$ = obs.pipe(shareReplay(bufferReplays, time)));

export function renewCacheOnTimer(
  obs: Observable<any>,
  time: number,
  bufferReplays: number = 1
) {
  return createReturnObs(obs, time, bufferReplays).pipe(
    first(
      null,
      defer(() => createReturnObs(obs, time, bufferReplays))
    ),
    mergeMap((d) => (isObservable(d) ? d : of(d)))
  );
}

export function generateTableColumnHeader(detail: string[]): TableColumn[] {
  let d = [...detail];
  return d.map((item) => {
    let temp: TableColumn = {
      columnDef: '',
      header: '',
      showAvatar: false,
      showCheckBox: false,
      avatarString: undefined,
    };
    temp.columnDef = item;
    temp.header = convertCamelCaseToNormalText(item);
    return temp;
  });
}

export function convertCamelCaseToNormalText(text: string): string {
  const result = text.replace(/([A-Z])/g, ' $1');
  return result.charAt(0).toUpperCase() + result.slice(1);
}

export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'Showing:';

  return customPaginatorIntl;
}
