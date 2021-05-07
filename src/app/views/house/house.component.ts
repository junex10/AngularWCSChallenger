import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HouseService } from 'src/app/services/house/house.service';

import * as moment from 'moment';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  public actualHouse: any = '';
  public membersHouse: any = [];

  constructor(
    private houses: HouseService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params => {
      const id = params.get('house');
      this.actualHouse = id;
      this.getHouse(id);

    })
  }

  private getHouse(house:any)
  {
    this.houses.getActualHouse(house).subscribe(
      (data:any) => {
        data.map((x:any) => {
          x.age = moment(x.dateOfBirth, 'DDMMYYYY').fromNow().replace('years ago', 'años');
        });
        this.membersHouse = data;
      },
      err => {
        console.log(err)
      }
    );
  }

}
