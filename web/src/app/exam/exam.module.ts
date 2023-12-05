import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamComponent } from './exam.component';
import {ExamRoutingModule} from "./exam-routing.module";
import { ExamAddComponent } from './exam-add/exam-add.component';
import { ExamEditComponent } from './exam-edit/exam-edit.component';
import {ClazzModule} from "../clazz/clazz.module";
import {ReactiveFormsModule} from "@angular/forms";
import {PageModule} from "../common/page/page.module";
import {SizeModule} from "../common/size/size.module";



@NgModule({
  declarations: [
    ExamComponent,
    ExamAddComponent,
    ExamEditComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule,
    ClazzModule,
    ReactiveFormsModule,
    PageModule,
    SizeModule
  ]
})
export class ExamModule { }
