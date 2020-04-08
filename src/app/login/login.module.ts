import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { MatSelectModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [    
    LoginComponent
  ],
  imports: [
    MatSelectModule,
    BrowserModule,  
    ReactiveFormsModule        
  ],
  providers: [],  
})
export class LoginModule { }
