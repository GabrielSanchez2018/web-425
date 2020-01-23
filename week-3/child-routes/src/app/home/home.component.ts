/**
 * Author: Richard Krasso
 * Edited By: Gabriel Sanchez
 * Date: 1/20/2020
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>
      Welcome Home!!

      We have Great Products!
    </h1>
  `,
  styles: [
    `
    h1{background-color: lightgreen;
      color: red;
      padding-left: 50px;
      padding-top: 100px;
      padding-bottom: 100px;
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
