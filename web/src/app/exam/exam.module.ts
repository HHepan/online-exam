import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamComponent } from './exam.component';
import {ExamRoutingModule} from "./exam-routing.module";
import { ExamAddComponent } from './exam-add/exam-add.component';
import { ExamEditComponent } from './exam-edit/exam-edit.component';



@NgModule({
  declarations: [
    ExamComponent,
    ExamAddComponent,
    ExamEditComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule
  ]
})
export class ExamModule { }
