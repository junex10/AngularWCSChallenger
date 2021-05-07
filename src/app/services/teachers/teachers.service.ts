import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(
    private http: HttpClient
  ) { }

  public getTeachers<Array>()
  {
    return this.http.get<Array>("http://hp-api.herokuapp.com/api/characters/staff");
  }
}
