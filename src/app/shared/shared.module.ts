import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatDividerModule } from '@angular/material/divider'
import { MatIconModule } from '@angular/material/icon'
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatMenuModule } from '@angular/material/menu'
import { AppLoadingDirective } from './directives/app-loading.directive';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HotToastModule } from '@ngneat/hot-toast';
import { AgGridModule } from 'ag-grid-angular'
import { MatListModule } from '@angular/material/list'
import { MatFormField } from '@angular/material/form-field'
import { ReactiveFormsModule } from '@angular/forms'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTableModule } from '@angular/material/table'
import { MatTooltipModule } from '@angular/material/tooltip';
import { RoleDirective } from './directives/role.directive';
import { DebounceDirective } from './directives/debounce.directive'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { NgxMaskModule } from 'ngx-mask'
import { FullCalendarModule } from '@fullcalendar/angular'
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!
import listPlugin from '@fullcalendar/list'; // a plugin!
import { NgChartsModule } from 'ng2-charts'


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin,
  listPlugin
]);


const SHARED_MODS = [
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,    
    NgxMaskModule.forRoot(),
    HotToastModule.forRoot(),  
    FullCalendarModule,
    NgChartsModule.forRoot({
      defaults: {},
    }),
]

const SHARED_DECL = [AppLoadingDirective,RoleDirective,DebounceDirective]

@NgModule({
    declarations: [...SHARED_DECL, RoleDirective, DebounceDirective],
    imports: [CommonModule, ...SHARED_MODS],
    exports: [SHARED_MODS,SHARED_DECL],
    
})
export class SharedModule {}
