import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SecondarySidenavComponent } from './components/secondary-sidenav/secondary-sidenav.component';
import { SharedModule } from '@shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RolesAssignComponent } from './containers/roles-assign/roles-assign.component';
import { RolesRulesComponent } from './containers/roles-rules/roles-rules.component';
import { AccessCheckboxComponent } from './components/access-checkbox/access-checkbox.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SettingsComponent,
    SecondarySidenavComponent,
    RolesAssignComponent,
    RolesRulesComponent,
    AccessCheckboxComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SettingsRoutingModule,
    SharedModule,
    FormsModule,
    MatExpansionModule,
    MatCheckboxModule
  ],
})
export class SettingsModule {}
