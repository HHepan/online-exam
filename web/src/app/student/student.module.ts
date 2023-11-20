import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import {StudentRoutingModule} from "./student-routing.module";
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import {DialogEntryModule} from "../common/dialog-entry/dialog-entry.module";



@NgModule({
  declarations: [
    StudentComponent,
    StudentAddComponent,
    StudentEditComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    DialogEntryModule
  ]
})
export class StudentModule { }
