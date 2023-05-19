import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/fake-backend/services/user-service';
import { User } from 'src/app/fake-backend/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    this.userService.getUsers().subscribe(users => {
      const authenticatedUser = users.find(user => user.login === this.username && user.password === this.password);
      if (authenticatedUser) {
        // redirect to home page
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    });
  }

}