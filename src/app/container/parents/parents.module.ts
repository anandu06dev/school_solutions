import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentsRoutingModule } from './parents-routing.module';
import { ParentsComponent } from './parents.component';
import { ParentsTableComponent } from './containers/parents-table/parents-table.component';
import { ParentsListComponent } from './containers/parents-list/parents-list.component';
import { ParentsFormsComponent } from './containers/parents-forms/parents-forms.component';
import { WidgetModule } from '@widgets/widget/widget.module';


@NgModule({
  declarations: [
    ParentsComponent,
    ParentsTableComponent,
    ParentsListComponent,
    ParentsFormsComponent
  ],

  
  imports: [
    CommonModule,
    ParentsRoutingModule,
    WidgetModule
  ]
})
export class ParentsModule { }
