import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { MatSelectModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [    
    LoginComponent
  ],
  imports: [
    MatSelectModule,
    BrowserModule,          
  ],
  providers: [],  
})
export class LoginModule { }
