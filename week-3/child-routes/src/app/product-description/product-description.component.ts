/**
 * Author: Richard Krasso
 * Edited By: Gabriel Sanchez
 * Date: 1/20/2020
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  template: `
    <p>
      This is a Great Product!
    </p>
  `,
  styles: [

    `
    p{ background-color: gray;
        color: white;
    }

    `
  ]
})
export class ProductDescriptionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
