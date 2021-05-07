import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-request-new-students',
  templateUrl: './request-new-students.component.html',
  styleUrls: ['./request-new-students.component.css']
})
export class RequestNewStudentsComponent implements OnInit {

  public students: any = [];
  private studentsList = localStorage.getItem('students');
  private newStudentsList = localStorage.getItem('new-students');

  constructor() { }

  ngOnInit(): void {

    this.getRequestStudents();

  }

  private getRequestStudents()
  {
    const datos = this.newStudentsList;

    if (datos != null) {
      let setDatos = JSON.parse(datos);

      setDatos.map((x:any) => {
        x.dateOfBirth = moment(x.dateOfBirth).format('DD-MM-YYYY')
        x.age = x.dateOfBirth != '' ? moment(x.dateOfBirth, 'DDMMYYYY').fromNow(): 'Desconocido';

        if (x.age.match('years ago')) {
          x.age = x.age.replace('years ago', 'años');
        } else if (x.age.match('days ago')) {
          x.age = x.age.replace('days ago', 'dias');
        }
      });
      this.students = setDatos;
    }
  }

  public acceptStudent(student:any)
  {
    const students = this.studentsList;
    const newStudents = this.newStudentsList;

    if (newStudents != null) {
      const ns = JSON.parse(newStudents);

      if (students != null) {
        const c = JSON.parse(students);
        ns.map((x:any, index:any, array:any) => {
          if (student == x.name) {
            c.push({
              name: x.name,
              age: x.age,
              gender: x.gender,
              patronus: x.patronus,
              dateOfBirth: x.dateOfBirth,
              alive: true
            });
            array.splice(index, 1);
          }
        });

        if (ns == null || ns.length <= 0) {
          localStorage.removeItem('new-students');
        } else {
          localStorage.removeItem('new-students');
          localStorage.setItem('new-students', JSON.stringify(ns));
        }

        localStorage.removeItem('students');
        localStorage.setItem('students', JSON.stringify(c));
      }
    }

    document.location.href = document.location.href;
  }

  public declineStudent(student:any)
  {
    const students = this.studentsList;
    const newStudents = this.newStudentsList;

    if (newStudents != null) {
      const ns = JSON.parse(newStudents);

      if (students != null) {
        const c = JSON.parse(students);

        ns.map((x:any, index:any, array:any) => x.name == student ? array.splice(index, 1): 0);

        if (ns == null || ns.length <= 0) {
          localStorage.removeItem('new-students');
        } else {
          localStorage.removeItem('new-students');
          localStorage.setItem('new-students', JSON.stringify(ns));
        }

        localStorage.removeItem('students');
        localStorage.setItem('students', JSON.stringify(c));
      }
    }

    document.location.href = document.location.href;
  }

}
