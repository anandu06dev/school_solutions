import { AbstractControl, FormGroup } from '@angular/forms';
import { IAdmissionNumber } from './core.interface';

export interface IParents extends IAdmissionNumber{
  parentCode: 1 | 2 | 3;
  parentEducation: string;
  parentOccupation: string;
  parentAadharNo: string;
  parentPhoneNo: string;
  parentEmailId: string;
}

export interface IParentsFormGroup extends FormGroup {
  value: IParents;
  controls: {
    admissionNo:AbstractControl;
    parentCode: AbstractControl;
    parentEducation: AbstractControl;
    parentOccupation: AbstractControl;
    parentAadharNo: AbstractControl;
    parentPhoneNo: AbstractControl;
    parentEmailId: AbstractControl;
  };
}
