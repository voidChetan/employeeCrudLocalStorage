import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class MyhttpInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          if(event.status == 401) {
            alert('eroor ' + event.statusText);
          }  else {
            console.log('Response ' + event.status);
          }
        }

        return event;
      })
    );
  }
}
