import { Component, Input, OnInit } from '@angular/core';
import { CommanService } from 'src/app/services/comman.service';
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
  constructor(private empSrv: EmpService,private commsrv: CommanService) {
    this.commsrv.getThemeSubject().subscribe(res=> {
      debugger;
      this.theme = res;
    })
    setTimeout(() => {
      this.isLoader = false;
      const theme = this.commsrv.getData('theme');
      debugger;
    }, 2000);
   }

  ngOnInit(): void {
    this.empSrv.onThemeChange.subscribe(res=>{

      this.theme= res;
    })
  }

}
