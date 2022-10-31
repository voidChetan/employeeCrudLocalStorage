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
  constructor(private empSrv: EmpService) {
    setTimeout(() => {
      this.isLoader = false;
    }, 1000);
    this.empSrv.onThemeChange.subscribe(item => {


    })
   }

  ngOnInit(): void {
  }

}
