import { Component, OnInit } from '@angular/core';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   activeTheme: string = '';
  constructor(private empService: EmpService) { }

  ngOnInit(): void {
  }
  themeChange(theme: string) {
    debugger;
   this.activeTheme = theme;
   this.empService.onThemeChange.next(theme);
  }

}
