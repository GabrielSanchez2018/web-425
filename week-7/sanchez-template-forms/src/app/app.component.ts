/*
============================================
; Title: Assignment 7.2
; Author: Richard Krasso
; Edited by: Gabriel Sanchez
; Date: 2/15/2020
; Description: Template-Driven Forms
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sanchez-template-forms';

  onSubmit(formData) {
    console.log(formData);
    }
}
