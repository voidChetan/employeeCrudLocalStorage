import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  studentList: any[];
  cityArray: string[];
  list: Observable<any[]>;
  userList: any[] = [];
  result: number = 0;
  public name: string = 'demo';
  constructor(private serv: EmpService) {
    this.cityArray = ['Nagpur', 'pune', 'solapur', 'mumbai', 'jalgaon', 'panji', 'delhi'];
    this.list = this.serv.getUsers();
    this.studentList = [
      {
        id: 1,
        firstName: "Shnakr",
        LastName: "Bokde",
        city: "Nagpur",
        mobile: "",
        grade: "A",
        totalMarks: 320,
        contactDetails: ['1234567890', '0987654321'],
        addressObj: {
          address1: 'Pune xyz',
          address2: 'pune abc',
          city: 'Pune'
        }
      },
      {
        id: 2,
        firstName: "Sachin",
        LastName: "Rokde",
        city: "Bid",
        grade: "B",
        totalMarks: 300,
        contactDetails: ['45656546456', '45654665'],
        addressObj: {
          address1: 'Pune xyz',
          address2: 'pune abc',
          city: 'Pune'
        }
      },
      {
        id: 3,
        firstName: "Raju",
        LastName: "Parela",
        city: "Solapur",
        mobile: null,
        grade: "A",
        totalMarks: 250,
        contactDetails: ['1234567890', '0987654321'],
        addressObj: {
          address1: 'Pune xyz',
          address2: 'pune abc',
          city: 'Pune'
        }
      },
      {
        id: 4,
        firstName: "Rahul",
        LastName: "Shah",
        city: "Solpaur",
        mobile: "112233455",
        grade: "C",
        totalMarks: 370,
        contactDetails: ['1234567890', '0987654321'],
        addressObj: {
          address1: 'Pune xyz',
          address2: 'pune abc',
          city: 'Pune'
        }
      }
    ]
  }

  ngOnInit(): void {
    const result = this.add(53, 5);
  }
  loadUsers() {
    this.serv.getUsers().subscribe((res: any) => {
      this.userList = res;
    })
  }

  getStudentList() {
    const studNameArr = ['Ram', 'Parth', 'Sonu'];
    return studNameArr;
  }
  getFullName(fname: string, lname: string) {
    return fname + " " + lname;
  }

  add(num1: number, num2: number) {
    return num1 + num2;
  }
  addNumber(num1: number, num2: number) {
    this.result = num1 + num2;
  }
}
