import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeesRoutingModule } from './fees-routing.module';
import { FeesComponent } from './fees.component';
import { FeesformComponent } from './components/feesform/feesform.component';
import { FeeslistComponent } from './components/feeslist/feeslist.component';
import { FeestableComponent } from './components/feestable/feestable.component';
import {MatTabsModule} from '@angular/material/tabs';
import { WidgetModule } from '@widgets/widget/widget.module';

@NgModule({
  declarations: [
    FeesComponent,
    FeesformComponent,
    FeestableComponent,
    FeeslistComponent,
  ],
  imports: [CommonModule, FeesRoutingModule,MatTabsModule,WidgetModule],
})
export class FeesModule {
  static FeestableComponent: any;
}
