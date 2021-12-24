import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SibilingsComponent } from './sibilings.component';

const routes: Routes = [{ path: '', component: SibilingsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SibilingsRoutingModule { }
