import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeesRoutingModule } from './fees-routing.module';
import { FeesComponent } from './fees.component';
import { FeesformComponent } from './container/feesform/feesform.component';
import { FeeslistComponent } from './container/feeslist/feeslist.component';
import { FeestableComponent } from './container/feestable/feestable.component';
import {MatTabsModule} from '@angular/material/tabs';
import { WidgetModule } from '@widgets/widget/widget.module';
import { NumberToLetterPipe } from './pipes/number-to-letter.pipe';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    FeesComponent,
    FeesformComponent,
    FeestableComponent,
    FeeslistComponent,
    NumberToLetterPipe,
  ],
  imports: [CommonModule, FeesRoutingModule,WidgetModule,MatExpansionModule],
})
export class FeesModule {
  static FeestableComponent: any;
}
