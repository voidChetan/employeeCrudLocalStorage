import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NgClassComponent } from './components/topics/ng-class/ng-class.component';
import { NgStyleComponent } from './components/topics/ng-style/ng-style.component';
import { NgForComponent } from './components/topics/ng-for/ng-for.component';
import { NgifComponent } from './components/topics/ngif/ngif.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path:'',
    component: HomeComponent,
    children:[
      {
        path:'emp',
        component: EmployeeComponent
      },
      {
        path:'dashboard',
        component: DashboardComponent
      },
      {
        path:'users',
        component: UsersComponent
      },
      {
        path:'AddUser',
        component: AddUserComponent
      },
      {
        path:'ngif',
        component: NgifComponent
      },
      {
        path:'ng-for',
        component: NgForComponent
      },
      {
        path:'ng-class',
        component: NgClassComponent
      },
      {
        path:'ng-style',
        component: NgStyleComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
