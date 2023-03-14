import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { HttpClientModule } from "@angular/common/http";    
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MainComponents } from './moduls/main-components/main-components.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainComponents,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
