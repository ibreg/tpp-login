import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { MatSelectModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPipe } from './login.pipe';

@NgModule({
  declarations: [    
    LoginComponent,
    LoginPipe
  ],
  imports: [
    MatSelectModule,
    BrowserModule,  
    ReactiveFormsModule        
  ],
  providers: [LoginPipe],  
})
export class LoginModule { }
