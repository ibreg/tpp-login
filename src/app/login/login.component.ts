import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { LoginPipe } from './login.pipe';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public networks = [{
    value: 1,
    name: 'Network1'
  }, {
    value: 2,
    name: 'Network2'
  }
  ]
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        Username: [null,null],
        Password: [null, null],
        Network: [null, null]
      }
    )
  }
  onSubmit(form: NgForm) {
    
    console.log(form);
  }

}

