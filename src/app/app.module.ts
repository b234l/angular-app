import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { MenuItem } from 'primeng/api';                  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Moduls1 } from './moduls/moduls1/moduls1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    Moduls1,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
