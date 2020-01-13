/*
  Author: Richard Krasso
  Editd by: Gabriel Sanchez
  Date: 1/12/2020
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ name }}</h1>
    <button (click)="changeName()">Change Name</button>
  `,
  styles: [
    `
    h1 {
      color: red;
    }
    `
  ]

})
export class AppComponent {
  title = 'sanchez-one-way-binding';

  // class property 
  name: string = "Professor krasso";

  //Change name Function 
  changeName() {
    this.name = "Richard Krasso";
  }
}

// In order to run the program ng serve -o