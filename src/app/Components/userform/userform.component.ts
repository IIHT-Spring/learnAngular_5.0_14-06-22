import { Component, OnInit } from '@angular/core';
import User from 'src/app/Entity/User';


@Component({
  selector: 'app-user',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  user :User = new User();
 
  save() {
    console.log(this.user.name);
    console.log(this.user.age);
  }

  constructor() {}

  ngOnInit(): void {}
}
