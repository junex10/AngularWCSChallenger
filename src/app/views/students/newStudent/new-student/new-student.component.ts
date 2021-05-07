import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import * as $ from 'jquery';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.css']
})
export class NewStudentComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
    
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]),
    patronus: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    dateBirth: new FormControl('', Validators.required),
    sex: new FormControl('h', Validators.required)
  });

  ngOnInit(): void {
    
  }

  onSubmit()
  {
    const datos = localStorage.getItem('new-students');

    const name = $('#name');
    const patronus = $('#patronus');
    const dateBirth = $('#dateBirth');
    const sex = $('#sex').val() == 'h' ? 'male' : 'female';
    
    let insert = {};

    insert = {
      name: name.val(),
      patronus: patronus.val(),
      dateOfBirth: dateBirth.val(),
      gender: sex,
      alive: true
    };

    if (datos != null || datos != undefined) {
      const c = JSON.parse(datos);
      c.push(insert);
      localStorage.removeItem('new-students');
      localStorage.setItem('new-students', JSON.stringify(c));
    } else {
      localStorage.setItem('new-students', JSON.stringify([insert]));
    }

    this.form.reset();
    
    this.router.navigate(['students/request-students'])
  }
}
