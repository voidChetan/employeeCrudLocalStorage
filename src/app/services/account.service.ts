import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  onLogin(obj: any) : Observable<any> {
    return this.http.post('http://storeapi.gerasim.in/api/Account',obj);
  }
  getCustomers() : Observable<any> {

    return this.http.get('http://storeapi.gerasim.in/api/Master/GetAllCustomer');
  }

  uploadfile(obj:any) : Observable<any> {

    return this.http.post('http://storeapi.gerasim.in/api/GetValet/uploadFile',obj);
  }
}
