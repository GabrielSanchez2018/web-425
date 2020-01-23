/**
 * Author: Richard Krasso
 * Edited By: Gabriel Sanchez
 * Date: 1/20/2020
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <h1 class="home"> Please Login here</h1>
  `,
  styles: [`
  .home{ background-color: yellow;}
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
