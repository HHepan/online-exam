import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TeacherComponent} from "./teacher.component";
import {TeacherRoutingModule} from "./teacher-routing.module";
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import {DialogEntryModule} from "../common/dialog-entry/dialog-entry.module";
import {ReactiveFormsModule} from "@angular/forms";
import {SizeModule} from "../common/size/size.module";
import {PageModule} from "../common/page/page.module";



@NgModule({
  declarations: [TeacherComponent, TeacherAddComponent, TeacherEditComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    DialogEntryModule,
    ReactiveFormsModule,
    SizeModule,
    PageModule
  ]
})
export class TeacherModule { }
