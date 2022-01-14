import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentFormsComponent } from './container/student-forms/student-forms.component';
import { StudentGridComponent } from './container/student-grid/student-grid.component';
import { StudentListComponent } from './container/student-list/student-list.component';
import { StudentTableComponent } from './container/student-table/student-table.component';
import {
  StudentdetailsResolver,
  StudentFormBasedResolver,
} from './services/studentdetails.resolver';
import { StudentdetailsComponent } from './studentdetails.component';

const routes: Routes = [
  {
    path: '',
    component: StudentdetailsComponent,
    children: [
      {
        path: 'form/:action',
        component: StudentFormsComponent,
      },
      {
        path: 'form/:action/:admissionNo',
        component: StudentFormsComponent,
        resolve: {
          student: StudentFormBasedResolver,
        },
      },
      {
        path: 'table',
        component: StudentTableComponent,
        resolve: {
          students: StudentdetailsResolver,
        },
      },
      {
        path: 'list',
        component: StudentListComponent,
        resolve: {
          students: StudentdetailsResolver,
        },
      },
      {
        path: 'grid',
        component: StudentGridComponent,
        resolve: {
          students: StudentdetailsResolver,
        },
      },
      { path: '', redirectTo: 'list', pathMatch: 'full', },

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentdetailsRoutingModule {}
