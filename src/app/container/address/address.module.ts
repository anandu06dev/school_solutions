import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddressComponent } from './address.component';

import { AddresstableComponent } from './container/addresstable/addresstable.component';
import { AddresslistComponent } from './container/addresslist/addresslist.component';
import { AddressFormsComponent } from './container/address-forms/address-forms.component';
import { WidgetModule } from '@widgets/widget/widget.module';
import { SharedModule } from '@shared/shared.module';

import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  declarations: [
    AddressComponent,
  
    AddresstableComponent,
    AddresslistComponent,
    AddressFormsComponent
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,WidgetModule,MatAutocompleteModule,
    SharedModule
  ]
})
export class AddressModule { }
