/**
 * Author: Richard Krasso
 * Edited By: Gabriel Sanchez
 * Date: 1/20/2020
 */

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  template: `
    <h1 class="product"> Product Detail Component</h1>
    <input placeholder="Enter your name" type="text" [formControl]="name">
  `,
  styles: [`
  .product {background-color: blue;}
  `

  ]
})
export class ProductDetailComponent implements OnInit {

  name: FormControl = new FormControl();
  constructor() { }

  ngOnInit() {
  }

}
