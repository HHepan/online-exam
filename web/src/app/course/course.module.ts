import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import {CourseRoutingModule} from "./course-routing.module";
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import {DialogEntryModule} from "../common/dialog-entry/dialog-entry.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PageModule} from "../common/page/page.module";
import {SizeModule} from "../common/size/size.module";
import { CourseSelectComponent } from './course-select/course-select.component';



@NgModule({
    declarations: [
        CourseComponent,
        CourseAddComponent,
        CourseEditComponent,
        CourseSelectComponent
    ],
    exports: [
        CourseSelectComponent
    ],
    imports: [
        CommonModule,
        CourseRoutingModule,
        DialogEntryModule,
        FormsModule,
        ReactiveFormsModule,
        PageModule,
        SizeModule
    ]
})
export class CourseModule { }
