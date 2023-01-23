import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppBodyComponent } from "./app-body/app-body.component";
import { AppHeaderComponent } from "./app-header/app-header.component";
import { AppFooterComponent } from "./app-footer/app-footer.component";
import { AppContentComponent } from "./app-content/app-content.component";

@NgModule ({
    declarations: [AppBodyComponent, AppHeaderComponent, AppContentComponent, AppFooterComponent],
    exports: [AppBodyComponent],
    imports: [CommonModule]
})

export class Moduls1 {} 