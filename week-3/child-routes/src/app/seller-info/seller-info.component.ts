/**
 * Author: Richard Krasso
 * Edited By: Gabriel Sanchez
 * Date: 1/20/2020
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-info',
  template: `
    The seller is Mary Lau, id {{ sellerID }}
  `,
  styles: [`
  :host {background: yellow}

  `]
})
export class SellerInfoComponent implements OnInit {

  sellerID: String;
  constructor(route: ActivatedRoute) {
    this.sellerID = route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
