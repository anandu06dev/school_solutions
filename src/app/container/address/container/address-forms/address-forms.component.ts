import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { MyErrorStateMatcher } from '@utils/utility';
import {
  BehaviorSubject,
  debounceTime,
  Observable,
  Subject,
  switchMap,
  takeUntil,
  tap,
} from 'rxjs';
import { showAddressLists } from '../../addressUtil/util';
import { AddressApiService } from '../../services/addressapi.service';

@Component({
  selector: 'app-address-forms',
  templateUrl: './address-forms.component.html',
  styleUrls: ['./address-forms.component.scss'],
})
export class AddressFormsComponent implements OnInit {
  addressFormDetails!: FormGroup;
  matcher = new MyErrorStateMatcher();
  action: 'new' | 'edit' = 'new';
  opened: boolean = false;
  options: BehaviorSubject<any> = new BehaviorSubject([]);
  readonly options$ = this.options.asObservable().pipe(tap((d) => console.log));
  listconfig = showAddressLists
  showErrorOnaddress:boolean = false;
  // get addressForm() {
  //   return this.addressFormDetails;
  // }
  constructor(
    private fb: FormBuilder,
    private destroy$: AutoUnsubscribe,
    private api: AddressApiService
  ) {
    this.addressFormDetails = this.fb.group({
      admissionNo:['',Validators.required],
      printAddressPstlCd: ['', Validators.required],
      printAddressDist: [''],
      printAddressCd: ['',Validators.required],
      printAddressAdd1: ['',Validators.required],
      printAddressAdd2: ['',Validators.required],
      printAddressAdd3: [''],
      printAddressAdd4: ['',Validators.required],
      printAddressAdd5: ['',Validators.required],
    });
  }
  ngOnInit(): void {
    this.addressFormDetails
      .get('printAddressPstlCd')
      ?.valueChanges.pipe(
        debounceTime(500),
        tap((d) => console.log),
        takeUntil(this.destroy$),
        switchMap((d) => this.api.fetchDetailsBasedPostalPinCode(d))
      )
      .subscribe((d: any) => {
       this.showErrorOnaddress = d[0].PostOffice === null ? true :false;
       if (d.length && d[0]?.PostOffice) {
          this.options.next([...d[0].PostOffice]);
          this.opened = true;
        }
      });
  }
  populateResponses(data: any) {
    let areaName = data.Name.split(' ')
      .map(
        (i: string) =>
          !['north', 'south', 'west', 'east'].includes(i.toLowerCase()) && i
      )
      .filter((i: string) => i).join(' ')
     
    this.addressFormDetails.patchValue({
      printAddressAdd4: `${areaName}, ${data.District}`,
      printAddressDist: data.District,
      printAddressAdd5: data.State,
    });
    this.opened = false;

  }
  selectedValue(event: any) {
    this.updateAddmissinNo(event);
  }
  updateAddmissinNo(value: any) {
    this.addressFormDetails.patchValue({ admissionNo: value });
  }
}
