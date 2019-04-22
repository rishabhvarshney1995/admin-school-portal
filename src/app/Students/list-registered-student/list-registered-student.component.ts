import { Component, OnInit, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-list-registered-student',
  templateUrl: './list-registered-student.component.html',
  styleUrls: ['./list-registered-student.component.css']
})

export class ListRegisteredStudentComponent implements OnInit {
  public loggedInUser: String;
  private adminListPath = '/assets/data/AdminUsers.json';
  public studentList: Student[];

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    private studentService: StudentService,
    private router: Router
  ) {
    var current: Admin = JSON.parse(localStorage.getItem("currentUser"));
    this.http.get<Admin[]>(this.adminListPath).subscribe(
      (admins => admins.forEach((user) => {
        // console.log(user.name);

        if (user.username == current.username) {
          this.loggedInUser = user.name;
          // console.log(user);
        }
      })
      ));
  }

  ngOnInit() {
    this.studentList = this.studentService.getAllStudents();
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  redirecToRegisterStudent() {
    this.router.navigate(['/registerStudent']);
  }
  deleteStudent() {
    this.studentList = this.studentService.getAllStudents();
  }
}
