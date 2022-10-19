import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  userobj:any={
    name:'',
    contact:''
  };
  userForm: FormGroup;
  constructor(private formbuilder:FormBuilder) {
    this.userForm= new FormGroup({
      gender:new FormControl('',Validators.required),
      name: new FormControl('aaaa',[Validators.required,Validators.minLength(3)]),
      contact: new FormControl('',[Validators.required,Validators.pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')])
    });
    // this.userForm= this.formbuilder.group({
    //   name: [this.userobj.name,Validators.required],
    //   contact: [this.userobj.contact]
    // })
   }

  ngOnInit(): void {

  }
  submitted = false;
  edit(){
    this.userForm = this.formbuilder.group({
      name: [this.userobj.name,Validators.required],
      contact: [this.userobj.contact]
    })
  }
  save(){
    this.submitted= true;
    if(!this.userForm.invalid){
      this.submitted= false;
    }
  }
}
