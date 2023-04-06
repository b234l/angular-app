import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppBodyComponent } from "./app-body/app-body.component";
import { AppHeaderComponent } from "./body-components/app-header/app-header.component";
import { AppFooterComponent } from "./body-components/app-footer/app-footer.component";
import { AppContentComponent } from "./body-components/app-content/app-content.component";
import { AppConfigService } from "./service/app-config.service";
import { MenuComponent } from "../secondary-components/menu/menu.component";
import { MenubarModule } from "primeng/menubar";
import { LearningComponent } from "../secondary-components/learning/learning.component";

@NgModule ({
    declarations: [AppBodyComponent, 
        AppHeaderComponent,
        AppContentComponent, 
        AppFooterComponent, 
        MenuComponent,
        LearningComponent
    ],
    exports: [AppBodyComponent],
    imports: [CommonModule, MenubarModule],
    providers: [AppConfigService]
})

export class MainComponents {} 