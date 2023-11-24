import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeacherComponent} from "./teacher.component";
import {TeacherRoutingModule} from "./teacher-routing.module";
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import {DialogEntryModule} from "../common/dialog-entry/dialog-entry.module";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [TeacherComponent, TeacherAddComponent, TeacherEditComponent],
    imports: [
        CommonModule,
        TeacherRoutingModule,
        DialogEntryModule,
        ReactiveFormsModule
    ]
})
export class TeacherModule { }
