import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusRouteComponent } from './bus-route.component';
import { BusRouteformsComponent } from './container/bus-routeforms/bus-routeforms.component';
import { BusRoutelistComponent } from './container/bus-routelist/bus-routelist.component';
import { BusRoutetableComponent } from './container/bus-routetable/bus-routetable.component';

const routes: Routes = [
  {
    path: '',
    component: BusRouteComponent,
    children: [
      { path: 'form/:id', component: BusRouteformsComponent },
      { path: 'form/:id/:routeId', component: BusRouteformsComponent },
      { path: 'table', component: BusRoutetableComponent },
      { path: 'table/:students', component: BusRoutetableComponent },
      { path: 'list', component: BusRoutelistComponent },
      { path: 'list/:students', component: BusRoutelistComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusRouteRoutingModule {}
