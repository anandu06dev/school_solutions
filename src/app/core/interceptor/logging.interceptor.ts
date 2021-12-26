import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import {  tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn:"root"
})
export class LoggingInterceptor implements HttpInterceptor {
  private canExecuteLogger = true
  //environment.production ? false : true;

  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.canExecuteLogger) {
      const startTime = Date.now();
      let status: string;
      return next.handle(request).pipe(tap((event)=>{
        status = event instanceof HttpResponse ? 'success' :'failure'
      }),
        finalize(() => {
          const elapsedTime = Date.now() - startTime;
          const message = `⇧ Method => ${request.method} 
          Params => ${request.urlWithParams} 
          Status => ${status}
          Time => ${elapsedTime}`;
          this.logDetails(message);
        })
      );
    }

    return next.handle(request);
  }
  private logDetails(msg: string) {
    console.log(msg);
  }
}
