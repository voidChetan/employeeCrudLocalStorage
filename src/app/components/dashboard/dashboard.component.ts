import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, distinctUntilChanged, filter, forkJoin, map, mergeMap, of, reduce, Subscription } from 'rxjs';
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
  isMaxVisible: boolean = false;
  dasboardDetial: any;

  constructor(private empSrv: EmpService, private accoService: AccountService,
    private route: ActivatedRoute) {
      debugger;
      this.dasboardDetial = this.route.snapshot.data['dashboardData'];

  }

  ngOnInit(): void {
    let arr1= [

      {userId: 1, id: 1, title: "delectus aut autem", completed: false}
      ,
      {userId: 2, id: 2, title: "quis ut nam facilis et officia qui", completed: false}
      ,
      {userId: 3, id: 3, title: "fugiat veniam minus", completed: false}
      ];

      let arr2= [

      {userId: 2, id: 1, title: "delectus aut autem", completed: false}
      ,
      {userId: 4, id: 2, title: "quis ut nam facilis et officia qui", completed: false}
      ,
      {userId: 3, id: 3, title: "fugiat veniam minus", completed: false}
      ];

      var ddd= arr1.filter(a => arr2.some(b => a.userId === b.userId));
      console.log(ddd);

    let arr = of(1, 2, 5, 657, 35);
    arr.subscribe(res => {
    })
    let test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    let case1 = test1.pipe(
      filter(x => x % 2 === 0),
      reduce((acc, one) => acc + one, 0)
    )
    case1.subscribe(x => console.log('sum' + x));
    // this.loadCustomer();
    this.mergerUserData();
    //  this.mapOperator();
    // this.reduceOperator();
    //this.fetchData();
  }


  loadCustomer() {
    this.empSrv.getUsers().subscribe((res: any) => {
      this.topUsers = res;
      this.recentUsers = res;
    })
  }

  upload(event: any) {

    const form = new FormData();
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);
      this.accoService.uploadfile(formData).subscribe((res: any) => {

      })
    }

  }
  //Fork join to group multple observables
  fetchData() {
    let users = this.empSrv.getTopUsers();
    let todo = this.empSrv.getTodoList()
    forkJoin([users, todo]).subscribe(res => {
      debugger;
      this.topUsers = res[0];
      this.recentUsers = res[1];
    }, err => {
      debugger;
      console.log('error', err)
    })
  }

  mergerUserData() {
    let getUsers = this.empSrv.getUsers();
    let getTodo = this.empSrv.getTodoList();

    getTodo.pipe(
      mergeMap(val => {
        console.log('Source value ' + val)
        console.log('starting new observable')
        return getUsers
      })
    )
      .subscribe(result => {
        debugger;
      })
  }
  //to get different array of object from api responce
  mapOperator() {
    this.empSrv.getUsers()
      .pipe(
        map(users => users.map(user => ({ userid: user.id, name: user.name, username: user.username })))
      ).subscribe(res => {
        debugger
      });
  }
  // to get sum from array of object using reduce operator
  reduceOperator() {
    this.empSrv.getUsers()
      .pipe(
        map(x => x.reduce((acc, user) => acc = user.id + acc, 0))
      ).subscribe(res => {
        debugger;
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
