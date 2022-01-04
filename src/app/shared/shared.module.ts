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
import { RoleDirective } from './directives/role.directive'


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
    AgGridModule.withComponents([]),
    MatListModule,
    HotToastModule.forRoot(),    
]

const SHARED_DECL = [AppLoadingDirective]

@NgModule({
    declarations: [...SHARED_DECL, RoleDirective],
    imports: [CommonModule, ...SHARED_MODS],
    exports: [SHARED_MODS,SHARED_DECL],
    
})
export class SharedModule {}
