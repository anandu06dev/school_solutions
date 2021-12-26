import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IStudentDetails } from '@utils/interfaces/studentData';
import { MyErrorStateMatcher } from '@utils/utility';
import { studentDetail } from '../../models/studentDetail.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  providers: [
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
  _currentScreenView:'horizontal' |'vertical'='horizontal';
  @Input() set trackScreenView(value:string|null){
    if(value){
      this._currentScreenView = value.toLowerCase().includes('small') ? 'vertical' : 'horizontal';
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

  constructor(private fb: FormBuilder) {
 
    this.classes = this.generateStudentClass();
 
    
  }

  ngOnInit(): void {
    this.initializeChunkedForms(studentDetail);

  }


  initializeChunkedForms(studentDetails:IStudentDetails){
    let studentPrimaryDetails: { [key: string]: any } = {};
    let studentReligionDetails: { [key: string]: any } = {};
    let studentIdDetails: { [key: string]: any } = {};
    let studentFeesRelatedInfoDetails: { [key: string]: any } = {};


    Object.keys(studentDetails).map((i) => {
      if (this.studentPrimaryDetailsGroupedKeys.includes(i)) {
        studentPrimaryDetails[i] = ['', [Validators.required]];
      }
      if (this.studentReligionDetailsGroupedKeys.includes(i)) {
        studentReligionDetails[i] = ['', [Validators.required]];
      }
      if (this.studentIdDetailsGroupedKeys.includes(i)) {
        studentIdDetails[i] = ['', [Validators.required]];
      }
      if (this.studentFeesRelatedInfoGroupedKeys.includes(i)) {
        studentFeesRelatedInfoDetails[i] = ['', [Validators.required]];
      }
    });

    this.studentPrimaryDetails = this.fb.group({ ...studentPrimaryDetails });
    this.studentReligionDetails = this.fb.group({ ...studentReligionDetails });
    this.studentIdDetails = this.fb.group({ ...studentIdDetails });
    this.studentFeesRelatedInfoDetails = this.fb.group({ ...studentFeesRelatedInfoDetails });

  }
  generateStudentClass = (): any => {
    let studentClass: string[] = ['preKG', 'LKG', 'UKG'];
    return Array(15)
      .fill(0)
      .map((item, index) => {
        if (index <= 2) {
          return { label: studentClass[index], value: studentClass[index] };
        }
        return { label: `class ${index + 1}`, value: index + 1 };
      });
  };
}
