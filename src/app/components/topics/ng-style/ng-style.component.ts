import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  studentList: any[];
  myCss: any = {
    'background-color':'red',
    'color':'#ffff',
    'font-weight':'bold'
  };

  constructor() {
    this.studentList = [
      {id:"1" ,name:'Sachin', city:'Mumbai', stream: 'IT', attendance: 30,colorCode: '#db5a90'},
      {id:"7" ,name:'Saurabh', city:'Kolkatta', stream: 'C-Tec',attendance: 50,colorCode: 'blueviolet'},
      {id:"6" ,name:'Sehwag', city:'Delhi', stream: 'Mech',attendance: 40,colorCode: 'black' },
      {id:"5" ,name:'Deepika', city:'Bhopal', stream: 'Electrical',attendance: 90,colorCode: '#cfac13' },
      {id:"4" ,name:'Aniket', city:'Mumbai', stream: 'Electrical', attendance:70,colorCode: '#13cfcf'},
      {id:"3" ,name:'Sayna', city:'Delhi', stream: 'Mech',attendance: 80,colorCode: '#de7ce6' },
      {id:"2" ,name:'Virat', city:'Delhi', stream: 'IT',attendance: 90,colorCode: '#cedb5a' }
    ];
   }

  ngOnInit(): void {
  }
  myFun(){

  }

}
