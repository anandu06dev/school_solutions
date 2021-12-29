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

const SHARED_MODS = [
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FlexLayoutModule,
    MatBottomSheetModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    HotToastModule.forRoot(),    
]

const SHARED_DECL = [AppLoadingDirective]

@NgModule({
    declarations: [...SHARED_DECL],
    imports: [CommonModule, ...SHARED_MODS],
    exports: [SHARED_MODS,SHARED_DECL],
    
})
export class SharedModule {}
