import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentdetailsRoutingModule } from './studentdetails-routing.module';
import { StudentdetailsComponent } from './studentdetails.component';
import { WidgetModule } from '@widgets/widget/widget.module';
import { StudentTableComponent } from './container/student-table/student-table.component';
import { StudentListComponent } from './container/student-list/student-list.component';
import { StudentFormsComponent } from './container/student-forms/student-forms.component';
import { RouterString } from 'src/app/routerStringDeclaration';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxMaskModule } from 'ngx-mask';
import { MatChipsModule } from '@angular/material/chips';
import { BottomsheetsComponent } from './components/bottomsheets/bottomsheets.component';
import { BottomsheetPipe } from './pipes/bottomsheet.pipe';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    StudentdetailsComponent,
    StudentTableComponent,
    StudentListComponent,
    StudentFormsComponent,
    BottomsheetsComponent,
    BottomsheetPipe,
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    NgxMaskModule.forRoot(),
    StudentdetailsRoutingModule,
    WidgetModule,
    MatStepperModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [MatDatepickerModule, MatNativeDateModule],
})
export class StudentdetailsModule {
  currentfeatureModule: string = RouterString.STUDENTS;
}
