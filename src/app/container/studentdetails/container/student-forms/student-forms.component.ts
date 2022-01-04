import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { IStudentDetails } from '@utils/interfaces/studentData';
import {
  generateBloodGroup,
  generateStudentClass,
  MyErrorStateMatcher,
} from '@utils/utility';
import { Observable, of, take, takeUntil } from 'rxjs';
import { studentDetail } from '../../models/studentDetail.model';
import { StudentapiService } from '../../services/studentapi.service';

@Component({
  selector: 'app-student-forms',
  templateUrl: './student-forms.component.html',
  styleUrls: ['./student-forms.component.scss'],
})
export class StudentFormsComponent implements OnInit {
  isLinear = true;
  clearableInputs: { [key: string]: string } = {};
  studentForms!: FormGroup;
  _currentScreenView: 'horizontal' | 'vertical' = 'horizontal';
  _getStudentDetails: IStudentDetails = {};
  updateFlag: Observable<boolean> = of(false);
  updateOpr: boolean = false;
  action: any;
  toggleSaveButton: boolean=false;
  studentDetailBasedOnAdmissionNumber: any;

  @Input() set trackScreenView(value: string | null) {
    if (value) {
      this._currentScreenView = value.toLowerCase().includes('small')
        ? 'vertical'
        : 'horizontal';
    }
  }

  studentPrimaryDetails!: FormGroup;
  studentReligionDetails!: FormGroup;
  studentIdDetails!: FormGroup;
  studentFeesRelatedInfoDetails!: FormGroup;

  studentPrimaryDetailsGroupedKeys = [
    'admissionDate',
    'studentFirstName',
    'studentClass',
    'studentLastName',
    'studentFatherName',
    'studentMotherName',
    'studentGender',
    'studentDOB',
  ];

  studentReligionDetailsGroupedKeys = [
    'studentCommunity',
    'studentCaste',
    'studentSubCaste',
    'studentReligion',
  ];
  studentIdDetailsGroupedKeys = [
    'studentAadharNumber',
    'studentNationality',
    'studentBloodGroup',
    'studentMotherToungue',
    'studentLangaugeKnown',
  ];
  studentFeesRelatedInfoGroupedKeys = [
    'studentEMINo',
    'studentPreviousSchool',
    'studentDiscount',
  ];

  classes: { label: string; value: string }[] = [];
  gender: { label: string; value: string }[] = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];
  bloodGroup: { label: string; value: string }[] = [];
  community: { label: string; value: string }[] = [
    { label: 'SC/ST', value: 'SC/ST,' },
    { label: 'MBC', value: 'MBC' },
    { label: 'BC', value: 'BC' },
    { label: 'BCM', value: 'BCM' },
    { label: 'OC', value: 'OC' },
  ];

  matcher = new MyErrorStateMatcher();

  get fstudentPrimaryDetails() {
    return this.studentPrimaryDetails;
  }
  get fstudentReligionDetails() {
    return this.studentReligionDetails;
  }
  get fstudentIdDetails() {
    return this.studentIdDetails;
  }
  get fstudentFeesRelatedInfoDetails() {
    return this.studentFeesRelatedInfoDetails;
  }

  get filledAllDetails() {
    return (
      this.studentPrimaryDetails.valid &&
      this.studentFeesRelatedInfoDetails.valid &&
      this.studentIdDetails.valid &&
      this.studentReligionDetails.valid
    );
  }

  constructor(
    private fb: FormBuilder,
    private api: StudentapiService,
    private actRoute: ActivatedRoute,
    private destroy$:AutoUnsubscribe
  ) {
    this.classes = generateStudentClass();
    this.bloodGroup = generateBloodGroup();
    this.studentDetailBasedOnAdmissionNumber = actRoute.snapshot.data?.['student']
    console.log()

    this.actRoute.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(({action,admissionNo}) => {
        this.action = action;
        console.log(action,admissionNo)
        this.toggleSaveButton = this.action === 'edit' ? false : true;
        // if (siblingsId) {
        //   this.siblingDetails.id = siblingsId ? siblingsId : '';
        // }
      });
  }

  ngOnInit(): void {
   
 
    this.initChunkableForms({...studentDetail,...this.studentDetailBasedOnAdmissionNumber});

  }
  ngAfterViewInit() {
    () => {};
  }

  initChunkableForms(studentDetails: IStudentDetails | any = {}) {
    let studentPrimaryDetails: { [key: string]: any } = {};
    let studentReligionDetails: { [key: string]: any } = {};
    let studentIdDetails: { [key: string]: any } = {};
    let studentFeesRelatedInfoDetails: { [key: string]: any } = {};

    for (let i of Object.keys(studentDetails)) {
      if (this.studentPrimaryDetailsGroupedKeys.includes(i)) {
        studentPrimaryDetails[i] = [studentDetails[i], [Validators.required]];
      }
      if (this.studentReligionDetailsGroupedKeys.includes(i)) {
        studentReligionDetails[i] = [studentDetails[i], [Validators.required]];
      }
      if (this.studentIdDetailsGroupedKeys.includes(i)) {
        studentIdDetails[i] = [studentDetails[i], [Validators.required]];
      }
      if (this.studentFeesRelatedInfoGroupedKeys.includes(i)) {
        studentFeesRelatedInfoDetails[i] = [
          studentDetails[i],
          [Validators.required],
        ];
      }
    }

    this.studentPrimaryDetails = this.fb.group({ ...studentPrimaryDetails });
    this.studentReligionDetails = this.fb.group({ ...studentReligionDetails });
    this.studentIdDetails = this.fb.group({ ...studentIdDetails });
    this.studentFeesRelatedInfoDetails = this.fb.group({
      ...studentFeesRelatedInfoDetails,
    });

    if(this.action === 'edit'){
      this.studentPrimaryDetails.addControl('admissionNo',new FormControl());
      this.studentPrimaryDetails.patchValue({admissionNo:this.studentDetailBasedOnAdmissionNumber.admissionNo})
    }
  }

  create() {
    let temp = {};
    temp = {
      ...this.studentPrimaryDetails.value,
      ...this.studentIdDetails.value,
      ...this.studentFeesRelatedInfoDetails.value,
      ...this.studentReligionDetails.value,
    };

    this.api
      .createStudentDetails(temp)
      .pipe(take(1))
      .subscribe((d) => {
        // this.dataShare.tabindex = 1;
      });
  }
  update() {
    let temp = {};
    temp = {
      ...this._getStudentDetails,
      ...this.studentPrimaryDetails.value,
      ...this.studentIdDetails.value,
      ...this.studentFeesRelatedInfoDetails.value,
      ...this.studentReligionDetails.value,
    };

    this.api
    .updateStudentDetails(temp)
    .pipe(take(1))
      .subscribe((d) => {
        console.log(temp, d);
        // this.dataShare.tabindex = 1;
      });
  }
}
