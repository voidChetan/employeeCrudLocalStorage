import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse
} from '@angular/common/http';
import { catchError, map, Observable, pipe } from 'rxjs';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    debugger;
    return next.handle(request).pipe(map(event => {
      debugger;
      if (event instanceof HttpResponse) {
         debugger;
      }
      return event;
  }));
  }
}
