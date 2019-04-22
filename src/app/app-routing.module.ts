import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginAuthorizationGuard} from './auth-guard/login-authorization.guard';
import { LoginComponent } from './Login/login.component';
import { RegisterStudentComponent } from './Students/register-student/register-student.component';
import { ListRegisteredStudentComponent } from './Students/list-registered-student/list-registered-student.component';


const routes: Routes = [
  {path : '', redirectTo: 'login', pathMatch : 'full'},
  {path : 'login', component : LoginComponent },
  {path : 'registerStudent/:id', component : RegisterStudentComponent, canActivate: [LoginAuthorizationGuard] },
  {path : 'listStudents', component : ListRegisteredStudentComponent, canActivate: [LoginAuthorizationGuard] },
  {path : '**', redirectTo : 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
