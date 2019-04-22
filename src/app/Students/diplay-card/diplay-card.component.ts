import { Component, OnInit, Input, Output, ViewChild } from '@angular/core';
import { Student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diplay-card',
  templateUrl: './diplay-card.component.html',
  styleUrls: ['./diplay-card.component.css']
})
export class DiplayCardComponent implements OnInit {
  @Input() student: Student;

  private reply: Boolean;

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit() {
  }
  deleteStudent() {
    this.reply = confirm("Are You sure ?");
    if (this.reply) {
      this.studentService.deleteStudent(this.student.id);
    }
  }
}
