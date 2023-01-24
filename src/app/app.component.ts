import { Component } from '@angular/core';
import { PrimeIcons, PrimeNGConfig } from 'primeng/api';
import { AppConfigService, AppConfigSettings } from './moduls/moduls1/service/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-app';

  constructor (private AppConfigService: AppConfigService, private primengConfig: PrimeNGConfig) {
    const config: AppConfigSettings = {
      socialIcons: [
        { imageFile: 'C:\Users\MSI\angular-app\src\favicon', alt: 'Angular', url: 'http://angular.io' }
      ],
    showUserControls: true
    };
    AppConfigService.configure(config)
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}