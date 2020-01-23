/**
 * Author: Richard Krasso
 * Edited By: Gabriel Sanchez
 * Date: 1/20/2020
 *
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
    <div class="container">
    <div class = "row">
    <h2> Page not Found!</h2>
  `,
  styles: [`
  .container{
    margin-top: 20px;
  }
  h2 {
    color: red;
  }
  `]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
