import { Component, OnInit } from '@angular/core';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

import * as moment from 'moment';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  public professors: any[] = [];

  constructor(
    private teachers: TeachersService
  ) { }

  ngOnInit(): void {

    this.getProfessor();
  }

  private getProfessor<Array>()
  {
    this.teachers.getTeachers().subscribe(
      (data:any) => {
        data.map((x:any) => {
          x.age = x.dateOfBirth != '' ? moment(x.dateOfBirth, 'DDMMYYYY').fromNow().replace('years ago', 'años') : 'Desconocido';
        })
        this.professors = data;
      }
    );
  }
}
