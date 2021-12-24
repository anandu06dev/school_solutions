import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SibilingsRoutingModule } from './sibilings-routing.module';
import { SibilingsComponent } from './sibilings.component';


@NgModule({
  declarations: [
    SibilingsComponent
  ],
  imports: [
    CommonModule,
    SibilingsRoutingModule
  ]
})
export class SibilingsModule { }
