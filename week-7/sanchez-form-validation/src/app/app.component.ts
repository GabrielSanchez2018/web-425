/*
============================================
; Title: Assignment 7.3
; Author: Richard Krasso
; Edited by: Gabriel Sanchez
; Date: 2/15/2020
; Description: Form Validation
;===========================================
*/
import { Component } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sanchez-form-validation';

  onSubmit(formData){
    console.log(formData)
  }
}
