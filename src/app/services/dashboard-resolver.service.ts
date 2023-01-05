import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolverService implements Resolve<any> {

  constructor(private http:HttpClient) { }

  resolve(): Observable<any>{

    return this.http.get('http://onlinetestapi.gerasim.in/api/OnlineTest/GetDashboardData');
  }
}
