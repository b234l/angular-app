import { Component } from '@angular/core';
import { PrimeIcons, PrimeNGConfig } from 'primeng/api';
import { AppConfigService, AppConfigSettings } from './moduls/main-components/service/app-config.service';
import { AccountService } from './fake-backend/services/account-service';
import { user } from './fake-backend/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-app';

  user!: user;

  constructor(
    private AppConfigService: AppConfigService, 
    private primengConfig: PrimeNGConfig,
    private accountService: AccountService
  ) 
  
  {
    
    const config: AppConfigSettings = {
      socialIcons: [
        { imageFile: 'C:/Users/MSI/angular-app/src/favicon', alt: 'Angular', url: 'http://angular.io' }
      ],

    showUserControls: true
    };
    AppConfigService.configure(config)
    this.accountService.user.subscribe(x => this.user = x);

  }

  logout() {
    this.accountService.logout()
  }
  
  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}