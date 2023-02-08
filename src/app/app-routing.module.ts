import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppBodyComponent } from './moduls/main-components/app-body/app-body.component';

const routes: Routes = [

  {
    path: '',
    component: AppBodyComponent,
    children: [
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
