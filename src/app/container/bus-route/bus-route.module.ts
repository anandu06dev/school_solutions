import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusRouteRoutingModule } from './bus-route-routing.module';
import { BusRouteComponent } from './bus-route.component';
import { BusRoutetableComponent } from './container/bus-routetable/bus-routetable.component';
import { BusRoutelistComponent } from './container/bus-routelist/bus-routelist.component';
import { BusRouteformsComponent } from './container/bus-routeforms/bus-routeforms.component';
import { WidgetModule } from '@widgets/widget/widget.module';

@NgModule({
  declarations: [
    BusRouteComponent,
    BusRoutetableComponent,
    BusRoutelistComponent,
    BusRouteformsComponent,
  ],
  imports: [CommonModule, BusRouteRoutingModule, WidgetModule],
})
export class BusRouteModule {}
