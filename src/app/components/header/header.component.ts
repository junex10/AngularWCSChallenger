import { Component, OnInit, Input } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  title = 'Escuela Hogwarts';

  constructor() { }

  ngOnInit(): void {
  }

  /**
  * @function show aside bar 
  */
  public activeAside() {
    const domAside = $('#aside');
    const buttonOpen = $('#activeAsideButton');

    domAside[0].dataset.boxshow = '1';
    buttonOpen.hide();

  }

  /**
  * @function hide aside bar 
  */

  public hideAside() {
    const domAside = $('#aside');
    const buttonOpen = $('#activeAsideButton');

    domAside[0].dataset.boxshow = '0';

    buttonOpen.show();
  }

}
