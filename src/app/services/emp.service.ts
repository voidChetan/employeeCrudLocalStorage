import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter, Observable, take,map, Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpService {

 // public onThemeChange1: Subject<any>;
  public onThemeChange: Subject<any>;

  constructor(private http: HttpClient) {
    this.onThemeChange = new Subject<any>();
  }

searchUserWithParam(str: string): Observable<any[]> {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users").pipe(
      map(data =>
        data.filter((m: any) =>
          m.name.toLowerCase().startsWith(str)
        )
      )
    );
  }
  searchUser(str: string): Observable<any[]> {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users");
  }
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users");
  }

  getTodoList(): Observable<any[]> {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/todos");
  }
  GetAllAttendance(obj:any): Observable<any[]> {
    return this.http.post<any[]>("http://onlinetestapi.gerasim.in/api/OnlineTest/GetAllAttendance",obj);
  }

  getTopUsers(): Observable<any[]> {
    return this.http.get<any[]>("https://jsonplaceholder.typicode.com/users").pipe(take(5));
  }

  getUserById(id: any): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+id)
  }
  addUser(obj: any): Observable<any> {
    return this.http.post('https://jsonplaceholder.typicode.com/users', obj)
  }

}
