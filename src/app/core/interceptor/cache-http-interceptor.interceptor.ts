import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RootMenu } from '@utils/utility';
import { Observable } from 'rxjs';
import { shareReplay, first, filter, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CachingInterceptorService implements HttpInterceptor {
  public store:{[key:string]:any} = {};

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
 
    if (req.method !== 'GET') {
    let d = Object.keys(this.store).forEach(item=>{
       if(item.includes(req.url)){
           this.store[item] = null;
           delete this.store[item];
       }
       if(req.url.includes('auth')){
           this.store = {};
       }
    })
      return next.handle(req);
    }

    // Check if observable is in cache, otherwise call next.handle
    const cachedObservable =
      this.store[req.urlWithParams] ||
      (this.store[req.urlWithParams] = next.handle(req).pipe(
        // Filter since we are interested in caching the response only, not progress events
        filter((res) => res instanceof HttpResponse),
        // Share replay will cache the response
        // shareReplay(1)
      ));
    // pipe first() to cause the observable to complete after it emits the response
    // This mimics the behaviour of Observables returned by Angular's httpClient.get()
    // And also makes toPromise work since toPromise will wait until the observable completes.
    return cachedObservable.pipe(first());
  }
}
