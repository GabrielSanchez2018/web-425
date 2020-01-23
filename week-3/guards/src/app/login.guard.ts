/**
 * Author: Richard Krasso
 * Edited By: Gabriel Sanchez
 * Date: 1/20/2020
 */
import { CanActivate, Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate {

  constructor (private router: Router) {}

  canActivate () {
    let loggedIn = Math.random() < 0.5;

    if (!loggedIn) {
      alert("You're not logged in - Redirecting to Home page");
      this.router.navigate(["login"]);
    }

    return loggedIn;

  }

}
