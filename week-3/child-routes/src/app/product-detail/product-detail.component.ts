
/**
 * Author: Richard Krasso
 * Edited By: Gabriel Sanchez
 * Date: 1/20/2020
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  template: `
    <div class="product">
    <router-outlet></router-outlet>
    <h1> Product Detail for Product: {{productId}}</h1>
    <p><a [routerLink]="['./seller', sellerId]"> Seller Info</a></p>
    </div>
  `,
  styles: [`
  .product {
    background-color: cyan;
  }
  a { color: green;
    font-size: 30px;
    padding-left: 100px;

  }
  `]
})
export class ProductDetailComponent implements OnInit {
    productId: String;
    sellerId: 5678;
  constructor(route: ActivatedRoute) {
    this.productId =route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}

