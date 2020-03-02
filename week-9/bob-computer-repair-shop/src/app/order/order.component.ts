/*
============================================
; Title: Assignment 9.3
; Author: Gabriel Sanchez
;
; Date: 3/1/2020
; Description: Bob's Computer Repair Shop
;===========================================
*/

import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { InvoiceComponent } from "../invoice/invoice.component";


@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.css"]
})
export class OrderComponent {
  totalAmount: number;

  public order = {
    userName: {name:'', info:''},
    userLastName: {name:'', info:''},
    userEmail: {name:'', info:''},
    passwordReset: { name: "", price: null },
    spywareRemoval: { name: "", price: null },
    memoryUpgrade: { name: "", price: null },
    softwareInstallation: { name: "", price: null },
    tuneUpService: { name: "", price: null },
    cleanUpService: { name: "", price: null },
    keyboardService: { name: "", price: null },
    laborCharge: { name: "", price: null },
    parts: { name: "", info: "" },
    total: { name: "", price: null },
    tip: {name:"", price: null}
  };
  constructor(public dialog: MatDialog) {}
  ngOnInit() {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    const modalTest = this.dialog.open(InvoiceComponent, {
      width: "50%",
      height: "90%",
    });

    modalTest.componentInstance.order = this.order;
  }
 //Submit Data   Password
  onSubmit(formData) {

    //Username
    if (formData.serviceOrders.userName) {
      this.order.userName.name = "User Name";
      this.order.userName.info = formData.serviceOrders.userName;
    }
    //User Last Name
    if (formData.serviceOrders.userLastName) {
      this.order.userLastName.name = "User Last Name";
      this.order.userLastName.info = formData.serviceOrders.userLastName;
    }
    //User Email
    if (formData.serviceOrders.userEmail) {
      this.order.userEmail.name = "Email";
      this.order.userEmail.info = formData.serviceOrders.userEmail;
    }
    //Password
    if (formData.serviceOrders.password) {
      this.order.passwordReset.name = "Password Reset";
      const passwordPrice = 39.99;
      this.order.passwordReset.price = passwordPrice;
    }
    //Spyware Removal
    if (formData.serviceOrders.spyware) {
      this.order.spywareRemoval.name = "Spyware Removal";
      const spywarePrice = 99.99;
      this.order.spywareRemoval.price = spywarePrice;
    }
    //Ram Upgrade
    if (formData.serviceOrders.memory) {
      this.order.memoryUpgrade.name = "RAM Upgrade";
      this.order.memoryUpgrade.price = 129.99;
    }
    //Software Installation
    if (formData.serviceOrders.software) {
      this.order.softwareInstallation.name = "Software Installation";
      this.order.softwareInstallation.price = 49.99;
    }
    //Tune-UP Service
    if (formData.serviceOrders.tuneUp) {
      this.order.tuneUpService.name = "Tune-Up";
      this.order.tuneUpService.price = 89.99;
    }
    //Disk Clean-up Service
    if (formData.serviceOrders.cleanUp) {
      this.order.cleanUpService.name = "Disk Clean-Up";
      this.order.cleanUpService.price = 149.99;
    }
    //Keyboard Cleaning Service
    if (formData.serviceOrders.keyboard) {
      this.order.keyboardService.name = "Keyboard Cleaning";
      this.order.keyboardService.price = 45.0;
    }
    // Labor Charge
    if (formData.serviceOrders.labor) {
      this.order.laborCharge.name = "Labor Charge @ $50/hr";
      const laborAmount = formData.serviceOrders.labor * 50;
      this.order.laborCharge.price = laborAmount;
    }
    // Tip
    if (formData.serviceOrders.tip) {
      this.order.tip.name = "Tip";
      const tipAmount = formData.serviceOrders.tip * 1;
      this.order.tip.price = tipAmount;
    }
    //Aditional Parts
    if (formData.serviceOrders.parts) {
      this.order.parts.name = "Additional Parts";
      this.order.parts.info = formData.serviceOrders.parts;
    }

    // Total
    if (formData.serviceOrders) {
      this.order.total.name = "Total";
      this.order.total.price =
        this.order.passwordReset.price +
        this.order.spywareRemoval.price +
        this.order.memoryUpgrade.price +
        this.order.softwareInstallation.price +
        this.order.tuneUpService.price +
        this.order.cleanUpService.price +
        this.order.keyboardService.price +
        this.order.tip.price +
        this.order.laborCharge.price;
    }
    //tip

    this.openDialog();
  }
}
