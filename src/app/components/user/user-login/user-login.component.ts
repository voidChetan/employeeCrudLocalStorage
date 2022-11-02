import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  signupUsers: any[] = [];
  signupObj:any = {
    userName: '',
    email: '',
    password: ''
  };
  loginObj: any = {
    EmailId: '',
    Password: ''
  };

  constructor(private accService: AccountService, private route: Router) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }
  onSignUp() {
   this.signupUsers.push(this.signupObj);
   localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
   this.signupObj = {
    userName: '',
    email: '',
    password: ''
  };
  }
  onLogin() {


  // this.accService.onLogin(this.loginObj).subscribe((res: any) => {


    // console.log('res',res)
    // localStorage.setItem('token',res.token);
     this.route.navigateByUrl('/dashboard');
  // })
  }
}
