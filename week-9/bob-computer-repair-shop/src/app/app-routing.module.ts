/*
============================================
; Title: Assignment 9.3
; Author: Gabriel Sanchez
;
; Date: 3/1/2020
; Description: Bob's Computer Repair Shop
;===========================================
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';



const routes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'main', component: MainComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
