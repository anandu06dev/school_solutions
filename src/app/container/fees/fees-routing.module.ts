import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeesformComponent } from './container/feesform/feesform.component';
import { FeeslistComponent } from './container/feeslist/feeslist.component';
import { FeestableComponent } from './container/feestable/feestable.component';
import { FeesComponent } from './fees.component';

const routes: Routes = [
  { path: '', component: FeesComponent,children:[
    
     { path: 'form/:id', component: FeesformComponent },
     { path: 'form/:id/:students', component: FeesformComponent },
     { path: 'table', component: FeestableComponent },
    
     { path: 'list', component: FeeslistComponent },

  ] },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeesRoutingModule {}
