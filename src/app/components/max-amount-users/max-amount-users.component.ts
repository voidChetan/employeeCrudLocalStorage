import { Component, Input, OnInit } from '@angular/core';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-max-users',
  templateUrl: './max-amount-users.component.html',
  styleUrls: ['./max-amount-users.component.css']
})
export class MaxAmountUsersComponent implements OnInit {

  @Input() userList: any[] = [];
  isLoader: boolean = true;
  theme: string='';
  constructor(private empSrv: EmpService) {
    setTimeout(() => {
      this.isLoader = false;
    }, 1000);
   }

  ngOnInit(): void {
    this.empSrv.onThemeChange.subscribe(res=>{
      debugger;
      this.theme= res;
    })
  }

}
