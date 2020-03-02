/*
============================================
; Title: Assignment 9.3
; Author: Gabriel Sanchez
;
; Date: 3/1/2020
; Description: Bob's Computer Repair Shop
;===========================================
*/
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { OrderComponent } from "./order/order.component";
import { HomeComponent } from "./home/home.component";
import { InvoiceComponent } from "./invoice/invoice.component";

import {
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatToolbarModule,
  MatMenuModule,
  MatCheckboxModule,
  MatListModule
} from "@angular/material";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [AppComponent, OrderComponent, HomeComponent, InvoiceComponent, MainComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatCheckboxModule,
    MatDialogModule,
    FormsModule,
    MatListModule,

    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [InvoiceComponent]
})
export class AppModule {}
