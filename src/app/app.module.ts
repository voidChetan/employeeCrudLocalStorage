import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PhoneDirective } from './directives/phone.directive';
import { PhoneSeperatorPipe } from './pipes/phone-seperator.pipe';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RecentUsersComponent } from './components/recent-users/recent-users.component';
import { MaxAmountUsersComponent } from './components/max-amount-users/max-amount-users.component';
import { UsersComponent } from './components/users/users.component';
import { LoginComponent } from './components/login/login.component';
import { AucompleteTextComponent } from './widgets/aucomplete-text/aucomplete-text.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { NgifComponent } from './components/topics/ngif/ngif.component';
import { NgForComponent } from './components/topics/ng-for/ng-for.component';
import { NgStyleComponent } from './components/topics/ng-style/ng-style.component';
import { NgClassComponent } from './components/topics/ng-class/ng-class.component';
import { TemFormComponent } from './components/topics/tem-form/tem-form.component';
import { NaPipe } from './pipes/na.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    PhoneDirective,
    PhoneSeperatorPipe,
    HomeComponent,
    DashboardComponent,
    RecentUsersComponent,
    MaxAmountUsersComponent,
    UsersComponent,
    LoginComponent,
    AucompleteTextComponent,
    AddUserComponent,
    NgifComponent,
    NgForComponent,
    NgStyleComponent,
    NgClassComponent,
    TemFormComponent,
    NaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
