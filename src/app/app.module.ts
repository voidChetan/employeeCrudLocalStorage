import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { PhoneDirective } from './directives/phone.directive';
import { PhoneSeperatorPipe } from './pipes/phone-seperator.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    PhoneDirective,
    PhoneSeperatorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
