import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validform',
  templateUrl: './validform.component.html',
  styleUrls: ['./validform.component.css']
})
export class ValidformComponent implements OnInit {
  onsubmit(data)
  {
   console.warn(data);
   
  }

  constructor() { }

  ngOnInit(): void {
  }

}
