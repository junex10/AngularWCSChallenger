import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private http: HttpClient
  ) { }

  public getStudents<Array>()
  {
    return this.http.get<Array>("http://hp-api.herokuapp.com/api/characters/students");
  }
}
