import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  user = {
    name: '',
    age: 0,
  };
  save() {
    console.log(this.user.name);
    console.log(this.user.age);
  }

  constructor() {}

  ngOnInit(): void {}
}
