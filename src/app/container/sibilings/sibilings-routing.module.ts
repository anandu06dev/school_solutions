import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SibilingsListComponent } from './container/sibilings-list/sibilings-list.component';
import { SibilingsformsComponent } from './container/sibilingsforms/sibilingsforms.component';
import { SibilingstableComponent } from './container/sibilingstable/sibilingstable.component';
import { SibilingsComponent } from './sibilings.component';

// const routes: Routes = [{ path: '', component: SibilingsComponent }];
const routes: Routes = [
  {
    path: '',
    component: SibilingsComponent,
    children: [
      { path: 'form/:id', component: SibilingsformsComponent },
      { path: 'form/:id/:students', component: SibilingsformsComponent },
      { path: 'table', component: SibilingstableComponent },
      { path: 'list', component: SibilingsListComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SibilingsRoutingModule { }
