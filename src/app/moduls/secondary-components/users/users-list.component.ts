import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { AccountService } from 'src/app/fake-backend/services/account-service';

@Component({ templateUrl: 'users-list.component.html' })
export class UsersListComponent implements OnInit {
  users: any;

  //users = null;

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }

  deleteUser(id: string) {
    const user = this.users.find((x: { id: string; }) => x.id === id);
    user.isDeleting = true;
    this.accountService.delete(id)
      .pipe(first())
      .subscribe(() => this.users = this.users.filter((x: { id: string; }) => x.id !== id));
  }
}