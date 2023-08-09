import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";    
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { AppRoutingModule } from './app-routing.module';

import { UserService } from './fake-backend/services/user-service';
import { AppComponent } from './app.component';
import { MainComponents } from './moduls/main-components/main-components.module';
import { UsersComponent } from './moduls/accounting-components/users/users.component';
import { LoginComponent } from './moduls/accounting-components/login/login.component';
import { ErrorNotFoundComponent } from './moduls/secondary-components/error-not-found/error-not-found.component';
import { QuestionsComponent } from './moduls/task-components/questions/questions.component';
import { RegisterComponent } from './moduls/accounting-components/register/register.component';
import { ExamComponent } from './moduls/task-components/exam/exam.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    LoginComponent,
    ErrorNotFoundComponent,
    QuestionsComponent,
    RegisterComponent,
    ExamComponent,
    
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    AppRoutingModule,
    MainComponents,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
