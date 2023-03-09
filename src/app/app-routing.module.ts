import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppBodyComponent } from './moduls/main-components/app-body/app-body.component';
import { EntryComponent } from 'src/app/moduls/secondary-components/entry/entry.component';
import { AuthGuard } from 'src/app/fake-backend/_helpers/auth-guard';

const accountModule = () => import('src/app/moduls/secondary-components/account/account.module').then(x => x.AccountModule);
const usersModule = () => import('src/app/moduls/secondary-components/users/users.module').then(x => x.UsersModule);

const routes: Routes = [
  {
     path: 'main',
     component: AppBodyComponent,
     children: [
    ]
  },

  { path: '', component: EntryComponent, canActivate: [AuthGuard] },
  { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: 'account', loadChildren: accountModule },

  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }