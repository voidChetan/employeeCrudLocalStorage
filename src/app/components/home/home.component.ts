import { Component, OnInit } from '@angular/core';
import { CommanService } from 'src/app/services/comman.service';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   activeTheme: string = '';
  constructor(private empService: EmpService,private commsrv: CommanService) { }

  ngOnInit(): void {
  }

  setTheme(theme:string) {
    this.commsrv.emitData(theme);
  }



  themeChange(theme: string) {

   this.activeTheme = theme;
   this.empService.onThemeChange.next(theme);
  }

}
