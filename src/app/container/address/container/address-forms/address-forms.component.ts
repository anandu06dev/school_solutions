import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutoUnsubscribe } from '@utils/auto-unsubscribe.service';
import { MyErrorStateMatcher } from '@utils/utility';
import { debounceTime, takeUntil } from 'rxjs';
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

  // get addressForm() {
  //   return this.addressFormDetails;
  // }
  constructor(private fb: FormBuilder, private destroy$: AutoUnsubscribe,private api:AddressApiService) {
    this.addressFormDetails = this.fb.group({
      addr1: ['', Validators.required],
      addr2: [''],
      addr3: [''],
      addr4: [''],
      addr5: [''],
      districtName: ['', Validators.required],
      postalcode: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.addressFormDetails
      .get('postalcode')
      ?.valueChanges.pipe(debounceTime(250), takeUntil(this.destroy$))
      .subscribe(() => {
        // this.api.fetchAddress()
      });
  }
}
