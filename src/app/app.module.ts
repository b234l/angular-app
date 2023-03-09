import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule } from 'primeng/accordion';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";           

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponents } from './moduls/main-components/main-components.module';

import { fakeBackendProvider } from './fake-backend/_helpers/fake-backend';
import { JwtInterceptor } from './fake-backend/_helpers/jwt-interceptor';
import { ErrorInterceptor } from './fake-backend/_helpers/error-interceptor';
import { AlertComponent } from './moduls/secondary-components/alert-components/alert.component';
import { EntryComponent } from './moduls/secondary-components/entry/entry.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainComponents,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
