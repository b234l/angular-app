import { Injectable } from "@angular/core";

export interface Icons {
  imageFile: string;
  url: string;
  alt: string;
}

export interface AppConfigSettings {
  showUserControls?: boolean;
  socialIcons?: Array<Icons>;
}

@Injectable()
export class AppConfigService {
  showUserControls = true;
  socialIcons = new Array<Icons>();
  configure(settings: AppConfigSettings): void {
    Object.assign(this, settings);
  }
}

