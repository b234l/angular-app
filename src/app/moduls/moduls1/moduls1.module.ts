import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppBodyComponent } from "./app-body/app-body.component";
import { AppHeaderComponent } from "./app-header/app-header.component";

@NgModule ({
    declarations: [AppBodyComponent],
    exports: [AppBodyComponent],
    imports: [CommonModule]
})

export class Moduls1 {} 