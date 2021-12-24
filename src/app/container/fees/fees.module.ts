import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeesRoutingModule } from './fees-routing.module';
import { FeesComponent } from './fees.component';


@NgModule({
  declarations: [
    FeesComponent
  ],
  imports: [
    CommonModule,
    FeesRoutingModule
  ]
})
export class FeesModule { }
