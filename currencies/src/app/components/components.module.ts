import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge/badge.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    BadgeComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BadgeComponent,
    NavbarComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
