import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tem-form',
  templateUrl: './tem-form.component.html',
  styleUrls: ['./tem-form.component.css']
})
export class TemFormComponent implements OnInit {
  studentList: any[];
  empObj: EmployeeObj;
  constructor() {
    this.empObj= new EmployeeObj();
    this.studentList = [
      { id: "1", name: 'Sachin', city: '', stream: null, attendance: 30, colorCode: '#db5a90' },
      { id: "7", name: 'Saurabh', city: 'Kolkatta', stream: 'C-Tec', attendance: 50, colorCode: 'blueviolet' },
      { id: "6", name: 'Sehwag', city: 'Delhi', stream: 'Mech', attendance: 40, colorCode: 'black' },
      { id: "5", name: '', city: 'Bhopal', attendance: 90, colorCode: '#cfac13' },
      { id: "4", name: 'Aniket', city: '', stream: 'Electrical', attendance: 70, colorCode: '#13cfcf' },
      { id: "3", name: 'Sayna', city: 'Delhi', stream: 'Mech', attendance: undefined, colorCode: '#de7ce6' },
      { id: "2", name: 'Virat', city: 'Delhi', stream: 'IT', attendance: 90, colorCode: '#cedb5a' }
    ];
  }

  ngOnInit(): void {
  }
  onSave(form: NgForm){

    if(form.invalid){
      alert('form invalid')
    } else{
      alert('form valid')
    }
  }

}


export class EmployeeObj {
  EmployeeId: number;
  FirstName: string;
  LastName: string;
  Technology: string;
  Designation: string;
  Skill: string;
  Core: string;
  IsCertification: string;
  Certification: string;
  Company: string;
  FewDetails: string;
  constructor() {
    this.EmployeeId = 0;
    this.FirstName= "";
    this.LastName="";
    this.Technology= "";
    this.Designation= "";
    this.Skill= "";
    this.Certification = '';
    this.Core= "";
    this.IsCertification= "";
    this.Company= "";
    this.FewDetails= "";
  }
}
