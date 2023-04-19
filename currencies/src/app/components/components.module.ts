import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    BadgeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BadgeComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
