import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { UsersListComponent } from './users-list.component';
import { AddRemoveComponent } from './add-remove.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: UsersListComponent },
      { path: 'add', component: AddRemoveComponent },
      { path: 'edit/:id', component: AddRemoveComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }