import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { LandingLeftComponent } from './landing-left/landing-left.component';
import { LandingRightComponent } from './landing-right/landing-right.component';
import { HeaderComponent } from './header/header.component';
import { MatListModule } from '@angular/material';


@NgModule({
  declarations: [LandingPageComponent, LandingLeftComponent, LandingRightComponent, HeaderComponent],
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    
  ]
})
export class LandingPageModule { }
