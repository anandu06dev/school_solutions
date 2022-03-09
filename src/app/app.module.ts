import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { CoreModule } from '@core/core.module';
import { WidgetModule } from '@widgets/widget/widget.module';
import { SharedModule } from '@shared/shared.module';
import {
  MatBottomSheetRef,
  MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorFilter } from '@core/interceptor/http-error-filter.interceptor';
import { HttpFilter } from '@core/interceptor/http-filter.interceptor';
import { LoggingInterceptor } from '@core/interceptor/logging.interceptor';
import { NotfoundComponent } from './notfound/notfound.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { AgGridModule } from 'ag-grid-angular';
import { CachingInterceptorService } from '@core/interceptor/cache-http-interceptor.interceptor';
import { AccessDeniedComponent } from './notAccess';

@NgModule({
  declarations: [AppComponent, NotfoundComponent,AccessDeniedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    WidgetModule,
    SharedModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
    HotToastModule.forRoot({}),
  ],
  providers: [
    { provide: MatBottomSheetRef, useValue: {} },
    { provide: MAT_BOTTOM_SHEET_DATA, useValue: {} },
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpFilter, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorFilter, multi: true },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CachingInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {}
