import { Component, OnInit } from '@angular/core';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
 
  employeeObj: EmployeeObj;
  sortBy: string;
  searchText: string;
  employeeArr : EmployeeObj[] = [];
 

  constructor() {
     this.employeeObj = new EmployeeObj();
     this.searchText = '';
     this.sortBy = '';
  }

  ngOnInit(): void { 
    this.getAllEmpoyee();
  }
  onSave() { 
     const isData = localStorage.getItem("EmpData");
     if(isData == null) {
      const newArr = [];
      this.employeeObj.EmployeeId = 0;
      newArr.push(this.employeeObj);
      localStorage.setItem("EmpData", JSON.stringify(newArr)); 
     } else {
      const oldData = JSON.parse(isData);
      const newId =oldData.length + 1;
      this.employeeObj.EmployeeId = newId;
      oldData.push(this.employeeObj);
      localStorage.setItem("EmpData", JSON.stringify(oldData)); 
     }
     this.employeeObj = new EmployeeObj();
     this.getAllEmpoyee();
  }
  getAllEmpoyee() { 
    const isData = localStorage.getItem("EmpData");
    if(isData != null) {
      const localData = JSON.parse(isData);
      this.employeeArr = localData; 
     }
  }

  onEdit(item: EmployeeObj) {
    this.employeeObj = item;
  }
  onDelete(item: EmployeeObj) {
    const isData = localStorage.getItem("EmpData");
    if(isData != null) {
      const localData = JSON.parse(isData);
      for (let index = 0; index < localData.length; index++) {
         if (localData[index].EmployeeId == item.EmployeeId) {
          localData.splice(0,1);
         } 
      }
      localStorage.setItem("EmpData", JSON.stringify(localData)); 
      this.getAllEmpoyee();
     }
    
  }
  onSearch() {
    const isData = localStorage.getItem("EmpData");
    if(isData != null) { 
      const localData = JSON.parse(isData);
      if (this.sortBy == "Name") {
        const filteredData = localData.filter((m:EmployeeObj) => m.FirstName.toLocaleLowerCase().startsWith(this.searchText.toLocaleLowerCase()) )
        this.employeeArr = filteredData;
      } 
      if (this.sortBy == "Technology") {
        const filteredData = localData.filter((m:EmployeeObj) => m.Technology.toLocaleLowerCase().startsWith(this.searchText.toLocaleLowerCase()) )
        this.employeeArr = filteredData;
      } 
       
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

 

