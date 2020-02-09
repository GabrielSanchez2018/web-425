/*
============================================
; Title: Assignment 6.4
; Author: Richard Krasso
; Edited by: Gabriel Sanchez
; Date: 2/8/2020
; Description: On Change Events
;===========================================
*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChildComponent } from './child/child.component';


const routes: Routes = [
  {path: 'child', component: ChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
