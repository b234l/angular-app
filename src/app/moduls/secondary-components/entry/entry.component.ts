import { Component } from '@angular/core';

import { user } from 'src/app/fake-backend/models/user';
import { AccountService } from 'src/app/fake-backend/services/account-service';

@Component({ templateUrl: 'entry.component.html' })
export class EntryComponent {
  user: user;

  constructor(private accountService: AccountService) {
    this.user = this.accountService.userValue;
  }
}