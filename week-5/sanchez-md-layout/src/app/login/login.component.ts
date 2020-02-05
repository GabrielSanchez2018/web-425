
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
  selector: 'app-login',
  template: `
  <div class="parent" fxLayout="row">
    <div class="left" fxFlex></div>
      <div class="right" fxFlex>
        <div class="wrapper">
          <div class="frm-login">
            <mat-card class="login-panel frm-login-panel">
              <mat-card-header class="frm-login-header">
                <mat-toolbar class="frm-login-toolbar">
                  Login
                </mat-toolbar>
              </mat-card-header>
              <mat-card-content class="frm-login-body">
                <mat-form-field>
                  <input type="text" matInput placeholder="Username or Email">
                </mat-form-field>
                <mat-form-field>
                    <input type="text" matInput placeholder="Password">
                  </mat-form-field>
              </mat-card-content>
            <mat-card-actions class="frm-login-actions">
              <button mat-raised-button class="btn-login">Cancel</button>
              <button mat-raised-button class="btn-login">Sign in</button><br><br>
              <button mat-raised-button class="btn-login-signup">Sign Up</button>
            </mat-card-actions>
            </mat-card>
          </div>
        </div>

    </div>
  </div>
  `,
  styles: [

    `
    .btn-login-signup {
      background-color: red;

    }
    `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
