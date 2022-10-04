import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: any;
  isApi: boolean = false;
  constructor(private empService: EmpService) {
    this.user = {
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
      id: 0
    };
  }

  ngOnInit(): void {
  }
  saveUser(form: NgForm) {
    if (!form.invalid)  {
      if (!this.isApi) {
        this.isApi =  true;
        this.empService.addUser( this.user).subscribe((result) => {
          alert("User Saved Successfully");
          this.isApi =  false;
        });
      } 
    } else {
      alert("Check Validations");
    } 
  }

}
