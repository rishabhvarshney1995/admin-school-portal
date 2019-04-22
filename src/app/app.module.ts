import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login.component';
import { RegisterStudentComponent } from './Students/register-student/register-student.component';
import { ListRegisteredStudentComponent } from './Students/list-registered-student/list-registered-student.component';

import { LoginAuthorizationGuard } from './auth-guard/login-authorization.guard';
import { AuthenticationService } from './services/authentication.service';
import { StudentService } from './services/student.service';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './services/alert.service';
import {FormsModule} from '@angular/forms';
import { DiplayCardComponent } from './Students/diplay-card/diplay-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterStudentComponent,
    ListRegisteredStudentComponent,
    AlertComponent,
    DiplayCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginAuthorizationGuard,
    AuthenticationService,
    StudentService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
