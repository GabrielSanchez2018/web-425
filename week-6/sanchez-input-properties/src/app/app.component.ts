/*
============================================
; Title: Assignment 6.2
; Author: Richard Krasso
; Edited by: Gabriel Sanchez
; Date: 2/8/2020
; Description: Input Properties
;===========================================
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sanchez-input-properties';

  stock: string;
  readonly numberOfShares = 100;

  onChangeEvent ({ target }): void {
    this.stock = target.value;
  }
}
