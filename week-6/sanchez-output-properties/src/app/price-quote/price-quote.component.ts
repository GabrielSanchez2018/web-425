/*
============================================
; Title: Assignment 6.3
; Author: Richard Krasso
; Edited by: Gabriel Sanchez
; Date: 2/8/2020
; Description: Output Properties
;===========================================
*/
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PriceQuote} from "./iprice-quote";
import {interval} from "rxjs/index";

@Component({
  selector: 'app-price-quote',
  template: `
   <strong>
     Inside PriceQuoteComponent
     {{ priceQuote?.stockSymbol }}
     {{ priceQuote?.lastPrice | currency: 'USD' }}
   </strong>
  `,
  styles: [`
    :host { 
      background-color: red; 
      
    }
  `]
})
export class PriceQuoteComponent implements OnInit {

  @Output() lastPrice = new EventEmitter<PriceQuote>();

  priceQuote: PriceQuote;

  constructor() {
    interval(2000)
      .subscribe(data => {
        this.priceQuote = {
          stockSymbol: 'IBM',
          lastPrice: 100 * Math.random()
        };

        this.lastPrice.emit(this.priceQuote);
      });
  }

  ngOnInit() {
  }

}
