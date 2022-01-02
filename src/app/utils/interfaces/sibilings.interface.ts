import { AbstractControl, FormGroup } from '@angular/forms';
import { IAdmissionNumber } from './core.interface';

export interface ISiblings extends IAdmissionNumber {
  id?:string;
  admissionNO?:string;
  siblingClass?: string;
  siblingRelation?: string;
  siblingDob?: string;
  siblingDiscount?: number|string;
}

export interface ISibilingFormGroup extends FormGroup {
  value: ISiblings;
  controls: {
    admissionNo: AbstractControl;
    siblingClass: AbstractControl;
    siblingRelation: AbstractControl;
    siblingDob: AbstractControl;
    siblingDiscount: AbstractControl;
  };
}
