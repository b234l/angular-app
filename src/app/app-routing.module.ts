import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppBodyComponent } from './moduls/main-components/app-body/app-body.component';
import { LearningComponent } from './moduls/secondary-components/learning/learning.component';
import { LoginComponent } from './moduls/accounting-components/login/login.component';
import { UsersComponent } from './moduls/accounting-components/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: AppBodyComponent,
    children: [
      {path: 'learning', component: LearningComponent},
      {path: 'login', component: LoginComponent},
      {path: 'users', component: UsersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
