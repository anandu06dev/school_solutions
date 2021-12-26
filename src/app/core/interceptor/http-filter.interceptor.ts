import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { LocalstorageService } from '@shared/services/localstorage.service';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';

@Injectable({providedIn:'root'})
export class HttpFilter implements HttpInterceptor {

    // private apiUrl = environment.apiUrl;
    constructor(private storage:LocalstorageService){}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(this.addAuthentication(request));
    }

    private addAuthentication(request: HttpRequest<any>): HttpRequest<any> {


        if (!request.url.includes('/auth/')) {
            const token =  this.storage.get('token');
            if (token) {
                request = request.clone({
                    setHeaders: {Authorization: 'Bearer ' + token}
                });
            }
        }
        return request;
    }

}