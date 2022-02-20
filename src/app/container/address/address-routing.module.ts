import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address.component';
import { AddressFormsComponent } from './container/address-forms/address-forms.component';
import { AddresslistComponent } from './container/addresslist/addresslist.component';
import { AddresstableComponent } from './container/addresstable/addresstable.component';

const routes: Routes = [
  {
    path: '',
    component: AddressComponent,
    children: [
      { path: 'form/:id', component: AddressFormsComponent },
      { path: 'form/:id/:addressId', component: AddressFormsComponent },
      { path: 'table', component: AddresstableComponent },
      { path: 'table/:students', component: AddresstableComponent },
      { path: 'list', component: AddresslistComponent },
      { path: 'list/:students', component: AddresslistComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressRoutingModule {}
