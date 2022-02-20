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
import { Observable, of } from 'rxjs';
import { shareReplay, first, filter, take, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CachingInterceptorService implements HttpInterceptor {
  public store: { [key: string]: any } = {};
  public cache: Map<string, any> = new Map();

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    
    if (this.cache.has(req.urlWithParams)) {
      console.log(this.cache.get(req.urlWithParams))
      return of(this.cache.get(req.urlWithParams));
    } else {
      return next
        .handle(req)
        .pipe(tap((res: any) => {
          let excludeUrl = ['/api/postalpincode']
          if(excludeUrl.some((i:any)=>i.url === req.url)){
            if(req.method === 'GET' && res.status === 200){
              this.cache.set(req.urlWithParams, res.body);
            }

          }
          
        }));
    }
  }

  
}
