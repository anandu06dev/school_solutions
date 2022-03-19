import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '@shared/services/notification.service';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import {
  ISibilingFormGroup,
  ISiblings,
} from '@utils/interfaces/sibilings.interface';
import {
  dateHelper,
  generateStudentClass,
  MyErrorStateMatcher,
} from '@utils/utility';
import { take, takeUntil } from 'rxjs';
import { sibilingFormModel } from '../../models/sibiling.model';
import { SiblingapiService } from '../../services/siblingapi.service';

@Component({
  selector: 'app-sibilingsforms',
  templateUrl: './sibilingsforms.component.html',
  styleUrls: ['./sibilingsforms.component.scss'],
  viewProviders: [AutoUnsubscribe],
})
export class SibilingsformsComponent implements OnInit {
  siblingDetailsForms!: FormGroup;
  relation: { label: string; value: number }[] = [
    { label: 'brother', value: 1 },
    { label: 'sister', value: 2 },
  ];

  siblingDetails!: ISiblings;
  matcher = new MyErrorStateMatcher();
  classes: { label: string; value: string }[] = [];
  toggleSaveButton: boolean = false;

  action: 'new' | 'edit' = 'new';

  get sibilingForm() {
    return this.siblingDetailsForms;
  }

  constructor(
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private destroy$: AutoUnsubscribe,
    private api: SiblingapiService,
    private notifier: NotificationService
  ) {
    this.siblingDetails = { ...sibilingFormModel };
    this.actRoute.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(({ action, siblingsId }) => {
        this.action = action;
        this.toggleSaveButton = action === 'edit' ? false : true;
        if (siblingsId) {
          this.siblingDetails.id = siblingsId ? siblingsId : '';
        }
      });
  }
  ngOnInit(): void {
    this.classes = generateStudentClass();
    this.createForm(this.siblingDetails);
    if (this.action === 'edit') {
      this.getIndividualSiblingDetails(this.siblingDetails.id);
    }
  }

  add() {
    this.api
      .createSiblingDetail(this.siblingDetailsForms.value)
      .pipe(take(1))
      .subscribe((d) => {
        this.notifier.successNotification(
          `Successfully saved sibiling details`
        );
      });
  }

  update() {
    this.api
      .updateSiblingDetail(this.siblingDetailsForms.value)
      .pipe(take(1))
      .subscribe((d) => {
        this.notifier.successNotification(`Updated saved sibiling details`);
      });
  }

  getIndividualSiblingDetails(id?: string) {
    if (id) {
      this.api
        .getIndividualSiblingdetails(id)
        .pipe(take(1))
        .subscribe((d) => {
          this.siblingDetails = { ...this.siblingDetails, ...d };
          this.updateForm({ ...this.siblingDetails });
        });
    }
  }

  selectedValue(event: any) {
    this.updateAddmissinNo(event);
  }

  initForm = (value: { [key: string]: any } | ISiblings): void => {
    this.siblingDetailsForms = this.fb.group({
      siblingClass: [value.siblingClass, [Validators.required]],
      siblingRelation: [value.siblingRelation, [Validators.required]],
      siblingDob: [value.siblingDob, [Validators.required]],
      siblingDiscount: [value.siblingDiscount, [Validators.required]],
    });
  };

  createForm(value: { [Key: string]: any }) {
    this.initForm(value);
    this.siblingDetailsForms.addControl(
      'admissionNo',
      new FormControl(value['admissionNo'], Validators.required)
    );
    this.siblingDetailsForms.updateValueAndValidity();
  }

  updateForm(value: { [Key: string]: any }) {
    this.initForm(value);
    this.siblingDetailsForms.addControl(
      'admissionNo',
      new FormControl(value['admissionNo'], Validators.required)
    );
    this.siblingDetailsForms.addControl(
      'id',
      new FormControl(value['id'], Validators.required)
    );
    this.siblingDetailsForms.updateValueAndValidity();
  }

  updateAddmissinNo(value: any) {
    let { admissionNo } = value;
    this.siblingDetailsForms.patchValue({ admissionNo:admissionNo });
  }
}
