import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '@shared/services/notification.service';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { IParentsFormGroup } from '@utils/interfaces/parents.interface';
import { dateHelper, MyErrorStateMatcher } from '@utils/utility';
import { take, takeUntil } from 'rxjs';
import { ParentsapiService } from '../../services/parentsapi.service';

@Component({
  selector: 'app-parents-forms',
  templateUrl: './parents-forms.component.html',
  styleUrls: ['./parents-forms.component.scss'],
  providers: [AutoUnsubscribe],
})
export class ParentsFormsComponent implements OnInit {
  parentDetailForm!: IParentsFormGroup;
  toggleSaveButton: boolean = false;
  admissionNo: string = '';
  parenting:{label:string;value:number}[]=[]
  matcher = new MyErrorStateMatcher();

  get parentForm(){
    return this.parentDetailForm;
  }
  constructor(
    private fb: FormBuilder,
    private actRoute: ActivatedRoute,
    private destroy$: AutoUnsubscribe,
    private api: ParentsapiService,
    private notifier:NotificationService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.actRoute.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params: { action?: string; student?: string }) => {
        this.toggleSaveButton = params?.action === 'edit' ? false : true;
        if (params?.student) {
          this.admissionNo = params.student;
        }
      });
      this.createParentsList();
  }

  createParentsList(){
    this.parenting = [{label:'Mother',value:1},{label:'Father',value:2},{label:'Gaurdian',value:3}]
  }
  createForm() {
    this.parentDetailForm = this.fb.group({
      admissionNo: ['', [Validators.required]],
      parentCode: ['', [Validators.required]],
      parentEducation: ['', [Validators.required]],
      parentOccupation: ['', [Validators.required]],
      parentAadharNo: ['', [Validators.required]],
      parentPhoneNo: ['', [Validators.required]],
      parentEmailId: ['', [Validators.required,Validators.email]],
    }) as IParentsFormGroup;
  }
  selectedValue(event: any) {
    this.updateAddmissinNo(event);
  }
  updateAddmissinNo(value: any) {
    this.parentDetailForm.patchValue({ admissionNo: value });
  }

  add(){
    this.api.createParentDetails(this.parentForm.value).pipe(take(1)).subscribe((d)=>{
      console.log(d);
      this.notifier.successNotification(`Successfully saved parent details`)
    })
  }
  update(){
    this.api.updateParentDetail(this.parentForm.value).pipe(take(1)).subscribe((d)=>{
      console.log(d);
      this.notifier.successNotification(`Successfully updated parent details`)
    })
  }
}
