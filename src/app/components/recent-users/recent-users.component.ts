import { Component, Input, OnInit } from '@angular/core';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-recent-users',
  templateUrl: './recent-users.component.html',
  styleUrls: ['./recent-users.component.css']
})
export class RecentUsersComponent implements OnInit {

  @Input() userList: any[] = [];
  isLoader: boolean = true;
  theme: string='';
  colArr = ['name','username','email','phone'];
  constructor(private empSrv: EmpService) {
    setTimeout(() => {
      this.isLoader = false;
    }, 2000);
   }

  ngOnInit(): void {
    this.empSrv.onThemeChange.subscribe(res=>{
      debugger;
      this.theme= res;
    })
  }

}
