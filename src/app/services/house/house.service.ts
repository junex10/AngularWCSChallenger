import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor(
    private http: HttpClient
  ) { }

  public getActualHouse<Array>(house:any) 
  {
    return this.http.get<Array>(`http://hp-api.herokuapp.com/api/characters/house/${house}`);
  }
}
