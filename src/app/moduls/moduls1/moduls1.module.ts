import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppBodyComponent } from "./app-body/app-body.component";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { AppFooterComponent } from "./app-footer/app-footer.component";
import { AppContentComponent } from "./app-content/app-content.component";
import { AppConfigService } from "src/app/moduls/moduls1/service/app-config.service";
import { MenuComponent } from "./menu/menu.component";
import { MenubarModule } from "primeng/menubar";

@NgModule ({
    declarations: [AppBodyComponent, 
        AppHeaderComponent,
        AppContentComponent, 
        AppFooterComponent, 
        MenuComponent
    ],
    exports: [AppBodyComponent],
    imports: [CommonModule, MenubarModule],
    providers: [AppConfigService]
})

export class Moduls1 {} 