import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootLayoutComponent } from '@widgets/components/layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LoadingComponent } from '@widgets/components/loading/loading.component';
import { SharedModule } from '@shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';
import { AppMatTabComponent } from '@widgets/components/tab/tab.component';
import { QuickNavigationMenuComponent } from '@widgets/components/quick-navigation-menu/quick-navigation-menu.component';

import { MatTooltipModule } from '@angular/material/tooltip';
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { NgSelectModule } from '@ng-select/ng-select';
import { StudentSearchComponent } from '@widgets/components/student-search/student-search.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

const DECLARATIONS = [
  RootLayoutComponent,
  LoadingComponent,
  AppMatTabComponent,
  QuickNavigationMenuComponent,
  StudentSearchComponent
];
const MODS = [
  MatSidenavModule,
  MatToolbarModule,
  SharedModule,
  MatTabsModule,
  MatTooltipModule,
  NgSelectModule,
  NgOptionHighlightModule, 
];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [CommonModule, ...MODS],
  exports: [...DECLARATIONS, ...MODS],
})
export class WidgetModule {}
