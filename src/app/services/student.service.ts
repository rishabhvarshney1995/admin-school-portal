import { Injectable, OnInit } from '@angular/core';
import { Student } from '../models/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService{
  listOfStudents: Student[];
  newId : number;
  private studentListPath = '/assets/data/Students.json';
  
  constructor(private http: HttpClient) {
  }
  async registerStudent(student: Student) {
    this.listOfStudents = JSON.parse(localStorage.getItem("studentList"));
    this.newId = 0;
    this.listOfStudents.forEach((st) =>{
      if(st.id > this.newId){
        this.newId = st.id;
      }});
      student.id = this.newId + 1;
    this.listOfStudents.push(student);
    localStorage.setItem("studentList", JSON.stringify(this.listOfStudents));
  }

  getStudentById(id: Number): Student {
    var returnStudent: Student = new Student ;
    this.listOfStudents = JSON.parse(localStorage.getItem("studentList"));
    this.listOfStudents.forEach((student) => {
      if (student.id === id) {
        returnStudent = student;
      }
    });
    return returnStudent;
  }

  getAllStudents() {
    this.listOfStudents = JSON.parse(localStorage.getItem("studentList"));
    return this.listOfStudents;
  }

  editStudents(student: Student) {
    this.listOfStudents = JSON.parse(localStorage.getItem("studentList"));
    this.listOfStudents.forEach((stud) => {
      if (stud.id === student.id) {
        stud.studentName = student.studentName;
        stud.Category = student.Category;
        stud.DOB = student.DOB;
        stud.fathersName = student.fathersName;
        stud.lastClassScore = student.lastClassScore;
        stud.Domicile = student.Domicile;
        stud.BirthCertificate = student.BirthCertificate;
        stud.Marksheets = student.Marksheets;
        stud.PoliceClearance = student.PoliceClearance;
        stud.Passport = student.Passport;
        stud.Declaration = student.Declaration;
      }
    });
    localStorage.setItem("studentList", JSON.stringify(this.listOfStudents));
  }
  deleteStudent(id: Number) {
    this.listOfStudents = JSON.parse(localStorage.getItem("studentList"));
    this.listOfStudents = this.listOfStudents.filter((st) => {
      st.id != id;
    });
    localStorage.setItem("studentList", JSON.stringify(this.listOfStudents));
  }
}