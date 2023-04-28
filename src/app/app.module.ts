import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { HttpClientModule } from "@angular/common/http";    
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AppRoutingModule } from './app-routing.module';

import { UserService } from './fake-backend/services/user-service';
import { AppComponent } from './app.component';
import { MainComponents } from './moduls/main-components/main-components.module';
import { UsersComponent } from './moduls/accounting-components/users/users.component';
import { LoginComponent } from './moduls/accounting-components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MainComponents,
    FormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
