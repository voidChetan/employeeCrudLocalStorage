import { Component, OnInit } from '@angular/core';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private useSrv: EmpService) { }

  ngOnInit(): void {
  }
  themeChange(theme: string) {
    this.useSrv.onThemeChange.next(theme);
  }

}
