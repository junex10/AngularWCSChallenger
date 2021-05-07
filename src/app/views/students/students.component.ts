import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students/students.service';
import * as moment from 'moment';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public list_students: any = [];

  constructor(
    private students: StudentsService
  ) { }

  ngOnInit(): void {

    this.listStudents();
  }

  private listStudents<Array>() {

    const students = localStorage.getItem('students');

    if (students == null) {

      this.students.getStudents().subscribe(
        (data: any) => {
          data.map((x: any) => {
            x.age = x.dateOfBirth != '' ? moment(x.dateOfBirth, 'DDMMYYYY').fromNow().replace('years ago', 'años') : 'Desconocido';
          });
          this.list_students = this.addDataLocal(data);
        },
        err => {
          console.log(err);
        }
      );
    } else {
      const cs = JSON.parse(students);
      cs.map((x:any) => {
        x.age = x.dateOfBirth != '' ? moment(x.dateOfBirth, 'YYYYMMDD').fromNow() : 'Desconocido';

        if (x.age.match('years ago')) {
          x.age = x.age.replace('years ago', 'años');
        } else if (x.age.match('days ago')) {
          x.age = x.age.replace('days ago', 'dias');
        } else if(x.age.match('in \.*[0-9] days')) {
          x.age = x.age.replace('days', 'dias');
          x.age = x.age.replace('in', '');
        }
      });
      this.list_students = cs;
      console.log(cs);
    }
  }

  private addDataLocal(data: any) {
    const local = localStorage.getItem('students');
    if (local == null) {
      localStorage.setItem('students', JSON.stringify(data));
      return data;
    } else {
      return JSON.parse(local);
    }
  }

}
