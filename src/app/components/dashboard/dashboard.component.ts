import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  subscriptions: Subscription[] = [];
  
  topUsers: any[] = [];
  theme: string = '';
  recentUsers: any[] = [];
  constructor(private empSrv: EmpService) {
    this.empSrv.onThemeChange.subscribe(item => {
      debugger;
      this.theme = item;
    })
  }

  ngOnInit(): void {
    //this.fetchData();
    this.loadTopUsers();
    this.loadRecentUsers();
    this.loadDashboardData();
  }

  fetchData() {
    forkJoin([this.empSrv.getTopUsers(),  this.empSrv.getUsers()]).subscribe(res => {
        console.log(res);
        debugger;
        this.topUsers = res[0];
        this.recentUsers = res[1];
      }, err => {
        console.log('error', err)
      })
  }

  loadTopUsers() {
    const topsUsers = this.empSrv.getTopUsers().subscribe(result => {
      this.topUsers = result;
    })
    this.subscriptions.push(topsUsers);
  }
  loadRecentUsers() {
    this.subscriptions.push(
      this.empSrv.getUsers().subscribe(result => {
        this.topUsers = result;
      })
    );
  }
  loadDashboardData() {
    this.subscriptions.push(
      this.empSrv.getUsers().subscribe(result => {
        this.topUsers = result;
      })
    );
  }
  ngOnDestroy() {
    this.subscriptions.forEach(item => {
      item.unsubscribe();
    })
  }



}
