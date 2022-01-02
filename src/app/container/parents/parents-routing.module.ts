import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentsFormsComponent } from './containers/parents-forms/parents-forms.component';
import { ParentsListComponent } from './containers/parents-list/parents-list.component';
import { ParentsTableComponent } from './containers/parents-table/parents-table.component';
import { ParentsComponent } from './parents.component';

// const routes: Routes = [{ path: '', component: ParentsComponent }];
const routes: Routes = [
  {
    path: '',
    component: ParentsComponent,
    children: [
      { path: 'form/:id', component: ParentsFormsComponent },
      { path: 'form/:id/:parentsId', component: ParentsFormsComponent },
      { path: 'table', component: ParentsTableComponent },
      { path: 'list', component: ParentsListComponent },
      
      { path: 'table/:students', component: ParentsTableComponent },
 
     
    
      { path: 'list/:students', component: ParentsListComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentsRoutingModule {}
