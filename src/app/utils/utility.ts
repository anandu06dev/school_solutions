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
