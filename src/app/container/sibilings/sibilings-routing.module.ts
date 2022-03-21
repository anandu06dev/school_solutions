import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DEFAULT_LIST_PATH } from '@utils/utility';
import { SibilingsListComponent } from './container/sibilings-list/sibilings-list.component';
import { SibilingsformsComponent } from './container/sibilingsforms/sibilingsforms.component';
import { SibilingstableComponent } from './container/sibilingstable/sibilingstable.component';
import {
  SiblingResolver,
  SiblingStudentBasedResolver,
} from './services/sibling.resolver';
import { SibilingsComponent } from './sibilings.component';

// const routes: Routes = [{ path: '', component: SibilingsComponent }];
const routes: Routes = [
  {
    path: '',
    component: SibilingsComponent,
    children: [
      
      { path: 'form/:action', component: SibilingsformsComponent },
      { path: 'form/:action/:siblingsId', component: SibilingsformsComponent },
      {
        path: 'table',
        component: SibilingstableComponent,
    

        resolve: { siblings: SiblingResolver },
      },
      {
        path: 'list',
        component: SibilingsListComponent,
        resolve: { siblings: SiblingResolver },
      },
      {
        path: 'table/:students',
        component: SibilingstableComponent,
        resolve: {
          siblings: SiblingStudentBasedResolver,
        },
      },

      {
        path: 'list/:students',
        component: SibilingsListComponent,
        resolve: {
          siblings: SiblingStudentBasedResolver,
        },
      },
      DEFAULT_LIST_PATH
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SibilingsRoutingModule {}