import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/fake-backend/services/user-service';
import { User } from 'src/app/fake-backend/models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  user: User = { id: 0, login: '', password: '' };
  confirmPassword!: string;

  constructor(private userService: UserService, private router: Router) { }

  register(): void {
    if (this.user.password === this.confirmPassword) {
      this.userService.addUser(this.user).subscribe((user) => {
        this.router.navigate(['/login']);
      });
    } else {
      console.error('Passwords do not match');
    }
  }
}