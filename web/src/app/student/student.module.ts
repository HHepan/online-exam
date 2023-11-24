import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import {StudentRoutingModule} from "./student-routing.module";
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import {DialogEntryModule} from "../common/dialog-entry/dialog-entry.module";
import {ClazzModule} from "../clazz/clazz.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    StudentComponent,
    StudentAddComponent,
    StudentEditComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    DialogEntryModule,
    ClazzModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
