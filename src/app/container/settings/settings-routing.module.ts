import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { RolesRulesComponent } from './containers/roles-rules/roles-rules.component';
import { RolesAssignComponent } from './containers/roles-assign/roles-assign.component';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      { path: '', component: RolesAssignComponent },
      { path: 'roles-assign', component: RolesAssignComponent },

      { path: 'dashboard-settings', component: DashboardComponent },
      { path: 'roles-rules', component: RolesRulesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
