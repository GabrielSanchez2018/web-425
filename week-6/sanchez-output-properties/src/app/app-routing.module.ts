/*
============================================
; Title: Assignment 6.3
; Author: Richard Krasso
; Edited by: Gabriel Sanchez
; Date: 2/8/2020
; Description: Output Properties
;===========================================
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceQuoteComponent } from './price-quote/price-quote.component';


const routes: Routes = [
  {path: 'price-quote', component: PriceQuoteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
