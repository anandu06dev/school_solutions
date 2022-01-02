import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocalstorageService } from '@shared/services/localstorage.service';
import { BreakPointService } from '@shared/services/breakpoint.service';

const providers = [
  { provide: 'Window', useValue: window },
  LocalstorageService,
  BreakPointService,  
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [...providers],
    };
  }
}