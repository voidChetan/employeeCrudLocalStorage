import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, Observable, retry, startWith, switchMap } from 'rxjs';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  result!: Observable<any[]>;
  result2: any [] = [];
  search: FormControl = new FormControl("");
  theme: string = '';

  constructor(private userSrv: EmpService) {
    this.result = this.search.valueChanges.pipe(map((search) =>
      search.trim()),
      debounceTime(200),
      distinctUntilChanged(),
      switchMap((search) => this.userSrv.searchUserWithParam(search).pipe(
        retry(3),
        startWith([])
      ))
    );
    // this.search.valueChanges.subscribe(search =>
    //    this.userSrv.searchUser(search).subscribe(item=> {
    //      this.result2 =  item;
    //    })
    // );
    this.userSrv.onThemeChange.subscribe(item=>{

      this.theme = item;
    })
  }

  ngOnInit(): void {
  }

}
