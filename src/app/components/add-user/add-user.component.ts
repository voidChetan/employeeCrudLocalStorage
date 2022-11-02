import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }
  onChangeFile(event: any) {

    if(event.target.files.length > 0) {
      const file = event.target.files[0];
      if(file.type == 'image/png' || file.type == 'image/jpeg') {
        const formData = new FormData();
        formData.append('file',file);
        this.http.post('http://storeapi.gerasim.in/api/Customer/Upload',formData).subscribe((res: any)=> {

        });
      } else {
        alert('Pease select only jpeg and png');
      }
    }
  }

}
