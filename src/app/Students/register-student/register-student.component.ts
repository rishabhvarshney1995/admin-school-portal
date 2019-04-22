import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentService } from 'src/app/services/student.service';
import { Student } from 'src/app/models/student';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-register-student',
  templateUrl: './register-student.component.html',
  styleUrls: ['./register-student.component.css']
})

export class RegisterStudentComponent implements OnInit {
  public loggedInUser: String;
  private adminListPath = '/assets/data/AdminUsers.json';
  registerForm: FormGroup;
  private student = new Student;
  public id: number;
  public isEditEnabled: Boolean;
  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    private studentService: StudentService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    var current: Admin = JSON.parse(localStorage.getItem("currentUser"));
    this.http.get<Admin[]>(this.adminListPath).subscribe(
      (admins => admins.forEach((user) => {
        if (user.username == current.username) {
          this.loggedInUser = user.name;
        }
      })
      ));
  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      if (data.id[data.id.length - 1] === 'e') {
        this.id = +data.id.substring(0, data.id.length - 1);
        this.isEditEnabled = true;
      }
      else if (data.id == '0') {
        this.isEditEnabled = true;
      }
      else {
        this.id = +data.id;
        this.isEditEnabled = false;
      }
    })

    if (this.id) {
      this.student = this.studentService.getStudentById(this.id);
      this.registerForm = this.formBuilder.group({
        studentName: [this.student.studentName, Validators.required],
        Category: [this.student.Category, Validators.required],
        DOB: [this.student.DOB, Validators.required],
        fathersName: [this.student.fathersName, Validators.required],
        mothersName: [this.student.mothersName, Validators.required],
        lastClassScore: [+this.student.lastClassScore, [Validators.max(100), Validators.required]],
        Domicile: [this.student.Domicile, Validators.required],
        BirthCertificate: [this.student.BirthCertificate, Validators.required],
        Marksheets: [this.student.Marksheets, Validators.required],
        PoliceClearance: this.student.PoliceClearance,
        Passport: this.student.Passport,
        Declaration: [this.student.Declaration, Validators.required]
      });
    } else {
      this.registerForm = this.formBuilder.group({
        studentName: ['', Validators.required],
        Category: ['', Validators.required],
        DOB: ['', Validators.required],
        fathersName: ['', Validators.required],
        mothersName: ['', Validators.required],
        lastClassScore: [0, [Validators.max(100), Validators.required]],
        Domicile: ['', Validators.required],
        BirthCertificate: ['', Validators.required],
        Marksheets: ['', Validators.required],
        PoliceClearance: '',
        Passport: '',
        Declaration: ['', Validators.required]
      });
    }
    if (!this.isEditEnabled) {
      this.registerForm.disable();
    }
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  redirecTolist() {
    this.router.navigate(['/listStudents']);
  }
  registerStudent() {
    this.studentService.registerStudent(this.student);
  }
  onSubmit() {
    this.student = new Student();
    this.student.studentName = this.registerForm.controls.studentName.value;
    this.student.Category = this.registerForm.controls.Category.value;
    this.student.DOB = this.registerForm.controls.DOB.value;
    this.student.fathersName = this.registerForm.controls.fathersName.value;
    this.student.mothersName = this.registerForm.controls.mothersName.value;
    this.student.lastClassScore = this.registerForm.controls.lastClassScore.value;
    this.student.Domicile = this.registerForm.controls.Domicile.value;
    this.student.BirthCertificate = this.registerForm.controls.BirthCertificate.value;
    this.student.Marksheets = this.registerForm.controls.Marksheets.value;
    this.student.PoliceClearance = this.registerForm.controls.PoliceClearance.value;
    this.student.Passport = this.registerForm.controls.Passport.value;
    this.student.Marksheets = this.registerForm.controls.Marksheets.value;
    this.student.Declaration = this.registerForm.controls.Declaration.value;
    if (this.id) {
      this.student.id = this.id;
      this.studentService.editStudents(this.student);
      this.router.navigate(['/listStudents']);
    } else {
      this.studentService.registerStudent(this.student);
      this.router.navigate(['/listStudents']);
    }
  }
}
