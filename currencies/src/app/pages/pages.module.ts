import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
