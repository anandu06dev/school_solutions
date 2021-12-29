import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SibilingsRoutingModule } from './sibilings-routing.module';
import { SibilingsComponent } from './sibilings.component';
import { SibilingstableComponent } from './container/sibilingstable/sibilingstable.component';
import { SibilingsListComponent } from './container/sibilings-list/sibilings-list.component';
import { SibilingsformsComponent } from './container/sibilingsforms/sibilingsforms.component';
import { WidgetModule } from '@widgets/widget/widget.module';

@NgModule({
  declarations: [
    SibilingsComponent,
    SibilingstableComponent,
    SibilingsListComponent,
    SibilingsformsComponent,
  ],
  imports: [CommonModule, SibilingsRoutingModule, WidgetModule],
})
export class SibilingsModule {}
