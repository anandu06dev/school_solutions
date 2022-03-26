import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { WidgetModule } from '@widgets/widget/widget.module';
import { CalComponent } from './components/cal/cal.component';
import { StudentCardComponent } from './components/student-card/student-card.component';
import { StudFeesDiscntGroupComponent } from './components/stud-fees-discnt-group/stud-fees-discnt-group.component';


@NgModule({
  declarations: [
    DashboardComponent,
    CalComponent,
    StudentCardComponent,
    StudFeesDiscntGroupComponent,    
  ],
  imports: [CommonModule,DashboardRoutingModule,WidgetModule]
})
export class DashboardModule { }
