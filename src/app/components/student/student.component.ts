import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  studentArr: any[] = [];
  student: any = {
    studentId: 0,
    fullName: '',
    mobile: '',
    email: '',
    address: ''
  };
  searchObj: any = {
    CandidateId: '',
    FromDate: '',
    ToDate :''
  };
  isSelectAll: boolean = false;
  theme: string='';
  studentForm: FormGroup;
  constructor(private empSrv: EmpService) {
    this.studentForm = new FormGroup({
      fullName: new FormControl(""),
      mobile: new FormControl(""),
      email: new FormControl(""),
      address: new FormControl(""),

      familyDetails: new FormArray([
        new FormGroup({
          name: new FormControl(''),
          relation: new FormControl('')
        })
      ])
    });
   }

  ngOnInit(): void {
    this.getAllAttendance();
    this.empSrv.onThemeChange.subscribe(res=>{
      debugger;
      this.theme= res;
    })
    const localData = localStorage.getItem('studentList');
    if(localData != null) {
     // this.studentArr = JSON.parse(localData);
    }
  }

  getAllAttendance(){
    this.empSrv.GetAllAttendance(this.searchObj).subscribe((res: any)=>{
      this.studentArr = res['data'];
    })
  }

  get famlies() {
    return this.studentForm.get('familyDetails') as FormArray;
  }

  addRelation() {
    const control = <FormArray>this.studentForm.controls['familyDetails'];
    control.push(
      new FormGroup({
        name: new FormControl(''),
        relation: new FormControl('')
      })
    );
  }
  removeRelation(index: any) {
    const control = <FormArray>this.studentForm.controls['familyDetails'];
    control.removeAt(index);
  }
  onCheckAll() {
    for (let i = 0; i < this.studentArr.length; i++) {
      this.studentArr[i].isChecked = this.isSelectAll;

    }
  }
  onAddStudent() {





    const notNull = document.getElementById('studentModel');
    if (notNull != null) {
      notNull.style.display = 'block';
    }
    this.student = {
      studentId: 0,
      fullName: '',
      mobile: '',
      email: '',
      address: ''
    };
  }
  onCloseModel() {
    const notNull = document.getElementById('studentModel');
    if (notNull != null) {
      notNull.style.display = 'none';
    }
  }
  onDelete(id: number) {
    for (let i = 0; i < this.studentArr.length; i++) {

     if(this.studentArr[i].studentId == id) {
       this.studentArr.splice(i,1);
     }
    }
    localStorage.setItem('studentList',JSON.stringify(this.studentArr));
  }
  onEdit(stud: any) {

     this.onAddStudent();
     this.studentForm = new FormGroup({
      fullName: new FormControl(stud.fullName),
      mobile: new FormControl(stud.mobile),
      email: new FormControl(stud.email),
      address: new FormControl(stud.address),
      familyDetails: new FormArray([])
    });
    for (let i = 0; i < stud.familyDetails.length; i++) {
      const control = <FormArray>this.studentForm.controls['familyDetails'];
      control.push(
        new FormGroup({
          name: new FormControl(stud.familyDetails[i].name),
          relation: new FormControl(stud.familyDetails[i].relation)
        })
      );

    }
  }
  saveStudent() {

    console.log(this.studentForm.value);
    this.student.studentId =  this.studentArr.length + 1;
    this.studentArr.push(this.studentForm.value);
    this.onCloseModel();
    localStorage.setItem('studentList',JSON.stringify(this.studentArr));
  }
  onUpdate() {
   const record = this.studentArr.find(m => m.studentId == this.student.studentId);
   record.fullName = this.student.fullName;
   localStorage.setItem('studentList',JSON.stringify(this.studentArr));
   this.onCloseModel();
  }

}
