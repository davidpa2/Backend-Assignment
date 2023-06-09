import {
  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiAuthInterceptor implements HttpInterceptor {
  constructor() {}
  public get token() { return (environment.authToken)?'Bearer '+environment.authToken:''; }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(this.addAuthToken(request));
  }

  addAuthToken(request: HttpRequest<any>) {
    const token = this.token
    ? { Authorization: `${this.token}` }
    : {};

    return request.clone({
      setHeaders: token,
      url: request.url.replace('REPLACEME', environment.endpoint)
    });
  }
}
