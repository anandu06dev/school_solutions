import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { TabPipe } from '@widgets/components/tab/tab.pipe';
import { MatChipsModule } from '@angular/material/chips';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '@widgets/components/list/list.component';
import { NgxSpinnerModule } from "ngx-spinner";

const DECLARATIONS = [
  RootLayoutComponent,
  LoadingComponent,
  AppMatTabComponent,
  QuickNavigationMenuComponent,
  StudentSearchComponent,
  TabPipe,
  ListComponent
  
];
const MODS = [
  MatSidenavModule,
  MatToolbarModule,FormsModule,
  SharedModule,
  MatTabsModule,
  MatTooltipModule,
  MatMenuModule,
  MatChipsModule,
  NgSelectModule,
  NgOptionHighlightModule, 
  MatTableModule,
  MatPaginatorModule,
  NgxSpinnerModule,
  MatSortModule,
];

@NgModule({
  declarations: [...DECLARATIONS],
  imports: [CommonModule, ...MODS],
  exports: [...DECLARATIONS, ...MODS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class WidgetModule {}
