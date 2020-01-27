/*
 Author: Richard Krasso
 Edited by: Gabriel Sanchez
 Date: 1/25/2020
*/

import { Injectable } from '@angular/core';
import {Fruit} from "./fruit";

@Injectable()
export class FruitService {
  getFruit(): Fruit {
    return new Fruit(0, "Orange", "Yellow");
  }
}
