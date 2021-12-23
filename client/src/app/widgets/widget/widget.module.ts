import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RootLayoutComponent } from '@widgets/components/layout/layout.component'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { LoadingComponent } from '@widgets/components/loading/loading.component'
import { SharedModule } from '@shared/shared.module'


const DECLARATIONS = [RootLayoutComponent, LoadingComponent]
const MODS = [MatSidenavModule, MatToolbarModule,SharedModule]

@NgModule({
    declarations: [...DECLARATIONS],
    imports: [CommonModule, ...MODS],
    exports: [...DECLARATIONS, ...MODS],
})
export class WidgetModule {}
