import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppBodyComponent } from './moduls/main-components/app-body/app-body.component';
import { LearningComponent } from './moduls/secondary-components/learning/learning.component';
import { LoginComponent } from './moduls/accounting-components/login/login.component';
import { UsersComponent } from './moduls/accounting-components/users/users.component';
import { ErrorNotFoundComponent } from './moduls/secondary-components/error-not-found/error-not-found.component';
import { QuestionsComponent } from './moduls/task-components/questions/questions.component';
import { LessonOneComponent } from './moduls/secondary-components/learning/lessons/lesson-one/lesson-one.component';
import { TrafficRegulationsComponent } from './moduls/secondary-components/useful-info-components/traffic-regulations/traffic-regulations.component';
import { ExamInfoComponent } from './moduls/secondary-components/useful-info-components/exam-info/exam-info.component';
import { AdditionalInformationComponent } from './moduls/secondary-components/useful-info-components/additional-information/additional-information.component';
import { RegisterComponent } from './moduls/accounting-components/register/register.component';
import { ExamComponent } from './moduls/task-components/exam/exam.component';

const routes: Routes = [
  {
    path: '',
    component: AppBodyComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register',component: RegisterComponent},
      {path: 'learning', component: LearningComponent},
      {path: 'lesson-one', component: LessonOneComponent},
      {path: 'exam', component: ExamComponent},
      {path: 'traffic-regulations', component: TrafficRegulationsComponent},
      {path: 'additional-information', component: AdditionalInformationComponent},
      {path: 'exam-info', component: ExamInfoComponent},
      {path: 'users', component: UsersComponent},
      {path: 'questions', component: QuestionsComponent},
      {path: '**', component: ErrorNotFoundComponent}
    ],
  }
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
