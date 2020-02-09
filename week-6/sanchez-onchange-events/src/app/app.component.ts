/*
============================================
; Title: Assignment 6.4
; Author: Richard Krasso
; Edited by: Gabriel Sanchez
; Date: 2/8/2020
; Description: On Change Events
;===========================================
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sanchez-onchange-events';

  myGreeting = 'Hello';
  myUser: { name: string } = { name: 'Karen'}
}
