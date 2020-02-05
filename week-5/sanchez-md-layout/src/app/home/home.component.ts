
  /*
============================================
; Title: Assignment 5.4
; Author: Gabriel Sanchez
; Date: 04 Feb 20
; Description: Angular Material & Flex Layout
;===========================================
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="parent" fxLayout="row">
      <div class="left" fxFlex></div>
      <div class="right" fxFlex>
      <h2>Welcome to Week 5 </h2>
      <h3> During this week we will be learning about Angular Material and how to incorporate its components in an Angular application.   </h3>


      </div>
    </div>
  `,
  styles: [`
      .right {
        color: Brown;
      }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }};
