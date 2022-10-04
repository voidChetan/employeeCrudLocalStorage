import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
  divOneVisible: boolean; //type 1
  myName: string = ''; //type 2
  surname = 'Bokde'; // type 3
  rollNo : number = 123;
  currentDate: Date = new Date();

  student: any;

  rollNoArr: number[] = [];
  cityArr: string[];

  studentObj:any = {
    fName: 'Ram',
    lName: '',
    cityList: [
      'Pune',
      'Mumbai',
      'Nagpur'
    ],
    basicDetails: {
      email:'',
      mobile: 2345645656
    }
  };
  fName: string = 'Demo';
  lName: string = 'Demo';
  isDiv3: boolean = false;
  StudentArry: any[];
  outOf: number = 700;
  div4Visible: boolean = false;
  constructor() {
    this.divOneVisible = true;
    this.student = 123;
    this.student = 'chetan';
    this.student = [];
    this.cityArr = ['Pune','Nagpur'];
    this.StudentArry = [
      {
        name: 'Demo',
        city: 'Nagpur',
        totalMarks: 200,
        gender: 'M'
      },
      {
        name: 'Demo 1',
        city: 'pune',
        totalMarks: 300,
        gender: 'F'
      },
      {
        name: 'ram',
        city: 'mumbai',
        totalMarks: 500,
        gender: 'M'
      }
    ]
  }

  ngOnInit(): void {
  }
  calculateResult(totalMark: number) {
    console.log('data')
    const percentage = (totalMark / this.outOf) * 100;
    if(percentage > 50) {
      return true;
    } else {
      return false;
    }
  }
  onDiv1Show() {
   this.divOneVisible = true;
  }
  onDiv1Hide() {
    this.divOneVisible = false;
  }
  isDiv3Visible() {
   return this.isDiv3;
  }
  onDiv3Hide() {
   this.isDiv3 = false;
  }
  onDiv3Show() {
    this.isDiv3 = true;
  }
}
