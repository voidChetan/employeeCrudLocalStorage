import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginObj: any = {
    userName: '',
    password: ''
  }
  constructor(private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
  }
  onLogin() {

     const obj = {
      "EmailId": "admin@gmail.com",
      "Password": "admin"
    };
     this.http.post('http://onlinetestapi.gerasim.in/api/Account',obj).subscribe((m:any)=> {
       localStorage.setItem('token', m.token);
     })
  }


}
