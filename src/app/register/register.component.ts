import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitted = false;
  message: string;

  age = [20, 30, 40, 50, 60];
  model = new User('', '', '', '', '1', 20);

  constructor() { }

  ngOnInit() {
  }

  public register() {
    console.log(JSON.stringify(this.model));
    this.message = 'Form submitted successfully.';
    this.submitted = true;
  }

  public newUser() {
    this.model = new User('', '', '', '', 'Male', 20);
  }
}
