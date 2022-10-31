import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  onLogin(obj: any) : Observable<any> {
    return this.http.post('http://localhost:40392/api/Account',obj);
  }
  getCustomers() : Observable<any> {
    debugger
    return this.http.get('http://localhost:40392/api/Master/GetAllCustomer');
  }

  uploadfile(obj:any) : Observable<any> {
    debugger
    return this.http.post('http://localhost:40392/api/GetValet/uploadFile',obj);
  }
}
