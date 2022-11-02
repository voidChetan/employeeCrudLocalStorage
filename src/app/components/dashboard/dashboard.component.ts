import { Component, OnDestroy, OnInit } from '@angular/core';
import { forkJoin, Subscription } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';
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
  constructor(private empSrv: EmpService, private accoService: AccountService) {
  }

  ngOnInit(): void {
   this.loadCustomer();
  }

 loadCustomer() {

  this.accoService.getCustomers().subscribe((res: any) => {

  })
 }

 upload(event:any) {

  const form = new FormData();
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    this.accoService.uploadfile(formData).subscribe((res: any) => {

    })
  }

 }
































  fetchData() {
    forkJoin([this.empSrv.getTopUsers(),  this.empSrv.getUsers()]).subscribe(res => {
        console.log(res);

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
