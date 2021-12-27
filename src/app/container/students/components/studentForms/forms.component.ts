import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { IStudentDetails } from '@utils/interfaces/studentData';
import { MyErrorStateMatcher } from '@utils/utility';
import { filter, Observable, of, switchMap, take, takeUntil, tap } from 'rxjs';
import { studentDetail } from '../../models/studentDetail.model';
import { StudentDatashareService } from '../../services/student-datashare.service';
import { StudentapiService } from '../../services/studentapi.service';

@Component({
  selector: 'app-forms',
  templateUrl: './StudentForms.component.html',
  styleUrls: ['./studentForms.component.scss'],
  providers: [
    AutoUnsubscribe,
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class FormsComponent implements OnInit {
  isLinear = true;
  clearableInputs: { [key: string]: string } = {};
  studentForms!: FormGroup;
  _currentScreenView: 'horizontal' | 'vertical' = 'horizontal';
  _getStudentDetails: IStudentDetails = {};
  updateFlag: Observable<boolean> = of(false);
  updateOpr:boolean  =false;

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
    private dataShare: StudentDatashareService,
    private destroy$: AutoUnsubscribe,
    private api: StudentapiService
  ) {
    this.classes = this.generateStudentClass();
    this.bloodGroup = this.generateBloodGroup();
    this.updateFlag = dataShare.updateOperation$;
  }

  ngOnInit(): void {
    this.initChunkableForms(studentDetail);
    this.dataShare.updateOperation$
      .pipe(
        tap((d) => (this.updateOpr = d)),
        filter((i) => i),
        switchMap(() => this.dataShare.singleStudentDetails$),
        takeUntil(this.destroy$)
      )
      .subscribe((data: any) => {
        if (data?.data?.data) {
          let temp = { ...studentDetail, ...data.data.data };
          this._getStudentDetails = { ...temp };
          this.initChunkableForms(temp);
        }
      });
  }
  ngAfterViewInit() {
    () => {};
  }

  initChunkableForms(studentDetails: IStudentDetails|any={}) {
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
        studentFeesRelatedInfoDetails[i] = [studentDetails[i], [Validators.required]];
      }
    }

    this.studentPrimaryDetails = this.fb.group({ ...studentPrimaryDetails });
    this.studentReligionDetails = this.fb.group({ ...studentReligionDetails });
    this.studentIdDetails = this.fb.group({ ...studentIdDetails });
    this.studentFeesRelatedInfoDetails = this.fb.group({
      ...studentFeesRelatedInfoDetails,
    });
  }
  generateStudentClass = (): any => {
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

  generateBloodGroup() {
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
        this.dataShare.tabindex = 1;
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
        console.log(temp,d);
        this.dataShare.tabindex = 1;
      });
  }
}
