/**
 * Author: Richard Krasso
 * Edited By: Gabriel Sanchez
 * Date: 1/20/2020
 */


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
    <div class = "row">
    <h2> Welcome to the Home Page!</h2>
  `,
  styles: [`
  .container{
    margin-top: 20px;
  }
  h2 {
    color: green;
  }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
