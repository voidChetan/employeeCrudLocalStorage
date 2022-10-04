import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, Observable, take,map, Subject, BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpService {
 
  //public onThemeChange: BehaviorSubject<any>;
  public onThemeChange: Subject<any>;
  constructor(private http: HttpClient) { 
    this.onThemeChange = new BehaviorSubject<any>(null);
   // this.onThemeChange = new Subject<any>();
  }


  

  searchUserWithParam(str: string): Observable<any[]> {
    debugger;
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users").pipe(
      map(data =>
        data.filter((m: any) =>
          m.name.toLowerCase().startsWith(str)
        )
      )
    );
  }
  searchUser(str: string): Observable<any[]> {
    debugger;
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users");
  }
  getUsers(): Observable<any[]> {
    debugger;
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users");
  }

  getTopUsers(): Observable<any[]> {
    debugger;
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users").pipe(take(5));
  }

  addUser(obj: any): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/users', obj)
  }
 
}
