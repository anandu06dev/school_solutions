import { Breakpoints } from '@angular/cdk/layout';
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
  return EMPTY;
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
    label: 'Logout',
    icon: 'logout',
    showOnMobile: false,
    showOnTablet: false,
    showOnDesktop: false,
    url: `/${RouterString.LOGOUT}`,

  },
];
