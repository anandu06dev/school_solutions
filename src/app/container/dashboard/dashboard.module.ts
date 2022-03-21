import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { WidgetModule } from '@widgets/widget/widget.module';


@NgModule({
  declarations: [
    DashboardComponent,    
  ],
  imports: [CommonModule,DashboardRoutingModule,WidgetModule]
})
export class DashboardModule { }