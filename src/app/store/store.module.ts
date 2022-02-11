import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EntityStore } from './store.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
})
export class StoreModule {
  static forRoot() {
    return {
      ngModule: StoreModule,
      providers: [EntityStore],
    };
  }
}
