import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { LayoutComponent } from './layout.component';
import { UsersListComponent } from './users-list.component';
import { AddRemoveComponent } from './add-remove.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  declarations: [
    LayoutComponent,
    UsersListComponent,
    AddRemoveComponent
  ]
})

export class UsersModule { }