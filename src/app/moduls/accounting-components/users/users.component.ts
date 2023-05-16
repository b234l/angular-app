import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/fake-backend/services/user-service';
import { User } from 'src/app/fake-backend/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  newUser: User = { id: 0, login: '', password: '' };
  selectedUser: User = { id: 0, login: '', password: '' };

  constructor (private userService: UserService) { }

  ngOnInit() {

    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
    .subscribe(users => this.users = users)
  }

  addUser(login: string, password: string) {
    login = login.trim();
    password = password.trim();
    if (!login) { return; }
    if (this.users.find((user) => user.login === login)) { return; }
    const lastUser = this.users[this.users.length - 1];
    const id = lastUser ? (lastUser.id + 1) : 1;
    const newUser = { id, login, password } as User;
    this.userService.addUser(newUser).subscribe(user => {
      this.users.push(user);
      this.newUser = { id, login: '', password: '' };
    });
  }

  selectUser(user: User) {
    this.selectedUser = { ...user };
  }

  updateUser() {
    this.userService.updateUser(this.selectedUser).subscribe(user => {
      const index = this.users.findIndex(u => u.id === user.id);
      this.users[index] = user;
      this.selectedUser = { id: 0, login: '', password: '' };
    });
  }

  deleteUser(user: User) {
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user.id).subscribe();
  }
}

