import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { NotificationService } from '@shared/services/notification.service';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { ListConfig } from '@utils/interfaces/listConfig.interface';
import { IStudentDetails } from '@utils/interfaces/studentData';
import { takeUntil } from 'rxjs';
import {
  studentList,
  studentListSearch,
} from 'src/app/container/studentdetails/util/student.util';

@Component({
  selector: 'app-feesform',
  templateUrl: './feesform.component.html',
  styleUrls: ['./feesform.component.scss'],
  providers: [AutoUnsubscribe],
})
export class FeesformComponent implements OnInit {
  currentDate = new Date();
  tenure = '2020 - 2021';
  number = 0;
  tempBillNo: number = 0;
  listconfig: ListConfig = studentListSearch;
  billForm!: FormGroup;
  studentDetail: IStudentDetails = {};
  panelOpenState = false;
  constructor(
    private fb: FormBuilder,
    private destroy$: AutoUnsubscribe,
    private notifier: NotificationService
  ) {}

  ngOnInit(): void {
    this.billForm = this.fb.group({
      toggleSwitch: [false],
      admissionNo: ['', Validators.required],
      discount:[this.studentDetail.studentDiscount ?? 0],
      bills: this.fb.array([]),
    });
    this.addBills();
    this.billForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((d) => {
      if (Array.isArray(d?.bills)) {
        this.number = d.bills
          .map((i: any) => {
            let amount = Number(i.amount);
            return Number.isNaN(amount) ? 0 : amount;
          })
          .reduce(
            (previousValue: any, currentValue: any) =>
              previousValue + currentValue,
            0
          );
      } else this.number = 0;
    });
  }

  selectedValue(event: any) {
    this.updateAddmissinNo(event);
  }
  updateAddmissinNo(value: any) {
    this.studentDetail = { ...value };
    this.panelOpenState = false;
    this.billForm.patchValue({ admissionNo: this.studentDetail.admissionNo });
  }
  get bills(): FormArray {
    return this.billForm.get('bills') as FormArray;
  }
  get toggleSwitch() {
    return this.billForm.get('toggleSwitch')?.value
  }

  newBill(): FormGroup {
    return this.fb.group({
      billNo: [{ value: this.makeid(10), disabled: true }],
      scheme: ['', Validators.required],
      particular: '',
      amount: [0, Validators.required],
    });
  }
  addBills() {
    this.bills.push(this.newBill());
  }

  removeBill(i: number) {
    if (i !== 0 || this.bills.length !== 1) {
      this.bills.removeAt(i);
    } else {
      this.notifier.errorNotification(
        `Not allowed delete last available row in bills`
      );
    }
  }

  onSubmit() {
    console.log(this.billForm.value);
  }
  makeid(makeidLength: number) {
    var result = '';
    var characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < makeidLength; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
