import { Component } from '@angular/core';
import { PrimeIcons, PrimeNGConfig } from 'primeng/api';
import { AppConfigService, AppConfigSettings } from './moduls/main-components/service/app-config.service';
import { UserService } from './fake-backend/services/user-service';
import { User } from './fake-backend/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-app';

  constructor(private AppConfigService: AppConfigService, private primengConfig: PrimeNGConfig, private userService: UserService) {
    
    const config: AppConfigSettings = {
      socialIcons: [
        { imageFile: 'C:\Users\MSI\angular-app\src\favicon', alt: 'Angular', url: 'http://angular.io' }
      ],

    showUserControls: true
    };
    AppConfigService.configure(config)

    this.getUsers();
  }

  users!:User[];
  user:User = {
    id: 0, login: '', password: ''
  };

  addUser() {
    this.userService.addUser(this.user).subscribe({
      next: (res) => {
        this.users.push(this.user);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
  
  private getUsers() {
    this.userService.getUsers().subscribe({
      next: (res) => {
        this.users = res;
      },
      error: (err) => console.log(err)
    })
  }
  

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}