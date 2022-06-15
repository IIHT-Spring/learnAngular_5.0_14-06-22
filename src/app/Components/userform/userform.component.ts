import { Component, OnInit } from '@angular/core';
import User from 'src/app/Entity/User';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent implements OnInit {
  user :User = new User();
 
  save() {
    // console.log(this.user.name);
    // console.log(this.user.age);
    const observable = this.userService.createUser(this.user);
    observable.subscribe(
      (response: any) => {
        console.log(response);
      },
      function(error) {
        console.log(error);
        alert("Something went wrong please try again!")
        
      }
    )

  }

  constructor( public userService :UserService) {}

  ngOnInit(): void {}
}
