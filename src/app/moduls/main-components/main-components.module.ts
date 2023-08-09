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
import { AccordionModule } from "primeng/accordion"; 
import { TabViewModule } from 'primeng/tabview';
import { Lesson_1_routing } from "../secondary-components/learning/lessons/lesson-1/lesson-1-routing";
import { LessonOneComponent } from "../secondary-components/learning/lessons/lesson-one/lesson-one.component";
import { TrafficRegulationsComponent } from "../secondary-components/useful-info-components/traffic-regulations/traffic-regulations.component";
import { ExamInfoComponent } from "../secondary-components/useful-info-components/exam-info/exam-info.component";
import { AdditionalInformationComponent } from "../secondary-components/useful-info-components/additional-information/additional-information.component";
import { ReactiveFormsModule } from '@angular/forms';

@NgModule ({
    declarations: [AppBodyComponent, 
        AppHeaderComponent,
        AppContentComponent, 
        AppFooterComponent, 
        MenuComponent,
        LearningComponent,
        Lesson_1_routing,
        LessonOneComponent,
        TrafficRegulationsComponent,
        ExamInfoComponent,
        AdditionalInformationComponent,
    ],
    exports: [AppBodyComponent],
    imports: [CommonModule, 
        MenubarModule, 
        AccordionModule,
        TabViewModule,
        ReactiveFormsModule
    ],
    providers: [AppConfigService]
})

export class MainComponents {} 