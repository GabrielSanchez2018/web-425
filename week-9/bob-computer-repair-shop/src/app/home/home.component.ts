import { Component, OnInit } from '@angular/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


   typesOfShoes =
  [
    {'name': 'Password Reset', 'price': 39.99},
    {'name': 'Spyware Removal', 'price': 99.99},
    {'name': 'Ram Upgrade', 'price': 129.99},
    {'name': 'Software Installation', 'price': 49.99},
    {'name': 'Tune-up', 'price': 89.99},
    {'name': 'Keyboard Cleaning', 'price': 45},
    {'name': 'Disk Clean-up', 'price': 149.99},

  ];
  current_selected: string;


  onSelection(e, v){
   this.current_selected = e.option.value;
  }



  newPost = '';

  onAddPost(postInput: HTMLTextAreaElement){
    this.newPost = postInput.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
export class ListSelectionExample {

}
