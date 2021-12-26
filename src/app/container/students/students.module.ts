import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { StudentsRoutingModule } from './students-routing.module'
import { StudentsComponent } from './students.component'
import { TableviewComponent } from './components/tableview/tableview.component'
import { ListviewComponent } from './components/listview/listview.component'
import { FormsComponent } from './components/forms/forms.component'
import { MatTabsModule } from '@angular/material/tabs'
import { MatCardModule } from '@angular/material/card'
import { MatChipsModule } from '@angular/material/chips'

import { MatListModule } from '@angular/material/list'
import { WidgetModule } from '@widgets/widget/widget.module'
import { AgGridModule } from 'ag-grid-angular'
import { BottomsheetsComponent } from './components/bottomsheets/bottomsheets.component'
import { BottomsheetPipe } from './pipes/bottomsheet.pipe'
import { ReactiveFormsModule } from '@angular/forms'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { SharedModule } from '@shared/shared.module'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http'
import { StudentapiService } from './services/studentapi.service'
import {MatStepperModule} from '@angular/material/stepper';

@NgModule({
    declarations: [
        StudentsComponent,
        TableviewComponent,
        ListviewComponent,
        FormsComponent,
        BottomsheetsComponent,
        BottomsheetPipe,
        
    ],
    imports: [
        CommonModule,
        StudentsRoutingModule,
        MatStepperModule,
        MatTabsModule,
        MatCardModule,
        MatInputModule,
        MatChipsModule,
        MatSelectModule,
        MatListModule,
        WidgetModule,
        AgGridModule.withComponents([]),
        ReactiveFormsModule,
       
        MatDatepickerModule,
        MatNativeDateModule,
    ],
    providers: [  
        MatDatepickerModule,  
        MatNativeDateModule ,
        StudentapiService
    ],
})
export class StudentsModule {}
