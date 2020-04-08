import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  networks = [{
    value: 1,
    name: 'Network1'
  }, {
    value: 2,
    name: 'Network2'
  }
  ]
  constructor() { }

  ngOnInit() {
  }

}

