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

  constructor (private userService: UserService) { }

  ngOnInit(): void {

    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers()
    .subscribe(users => this.users = users)
  }

  add(login: string, password: string): void {
    login = login.trim();
    password = password.trim();
    if (!login) { return; }
    this.userService.addUser({login, password} as User)
    .subscribe(user => {this.users.push(user);
    });
  }

  delete(user: User): void {
    this.users = this.users.filter(u => u != user);
    this.userService.deleteUser(user.id).subscribe();
  }


}




//   refreshListOfUsers() {
//     this.userService.getUsers()
//       .subscribe(
//         data => this.users = data
//       );
//   }

//   onGetUser() {
//     if (this.selectedUser) {
//       this.userService.getUser(this.selectedUser)
//         .subscribe(
//           data => this.user = data,
//           error => console.error(error)
//         );
//     }
//   }

//   onSelectedUser(user: user) {
//     if (user) {
//       this.selectedUser = user;
//       this.userLogin = user.login;
//       console.log('you have picked user');
//     }
//   }

//   onAddUser(userLogin: user) {
//     if (userLogin) {
//       this.userService.addUser(userLogin)
//         .subscribe(
//           () => {
//             this.refreshListOfUsers();
//             this.userLogin = '';
//           }
//         );
//     } else {
//       console.log('add user login');
//     }
//   }

//   onUpdateUser() {
//     if (this.selectedUser) {
//       this.selectedUser.login = this.userLogin ? this.userLogin : this.selectedUser.login;
//       this.userService.updateUser(this.selectedUser)
//         .subscribe(
//           () => {
//             this.refreshListOfUsers();
//             this.userLogin = '';
//           }
//         );
//     } else {
//       console.log('pick the user');
//     }
//   }

//   onDeleteUser() {
//     if (this.selectedUser) {
//       this.userService.deleteUser(this.selectedUser)
//         .subscribe(
//           () => {
//             this.refreshListOfUsers();
//             this.userLogin = '';
//           }
//         );
//     } else {
//       console.log('pick the user');
//     }
//   }










// }
