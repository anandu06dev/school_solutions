import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SibilingsRoutingModule } from './sibilings-routing.module';
import { SibilingsComponent } from './sibilings.component';
import { SibilingstableComponent } from './container/sibilingstable/sibilingstable.component';
import { SibilingsListComponent } from './container/sibilings-list/sibilings-list.component';
import { SibilingsformsComponent } from './container/sibilingsforms/sibilingsforms.component';
import { WidgetModule } from '@widgets/widget/widget.module';
import { StudentsModule } from '../students/students.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from '@shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { BottomsheetPipe } from '../students/pipes/bottomsheet.pipe';
import { BottomsheetsComponent } from './components/bottomsheets/bottomsheets.component';

@NgModule({
  declarations: [
    SibilingsComponent,
    SibilingstableComponent,
    SibilingsListComponent,
    SibilingsformsComponent,
    BottomsheetsComponent,
      ],
  imports: [
    CommonModule,
    SibilingsRoutingModule,
    WidgetModule,    
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    SharedModule,
    MatNativeDateModule,
    MatSelectModule,
    
    NgxMaskModule.forRoot(),
  ],
  providers:[
    MatDatepickerModule,  
    MatNativeDateModule ,
  ]
})
export class SibilingsModule {}
