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
import {PipeModule} from "../pipe/pipe.module";
import { SetExamQuestionComponent } from './set-exam-question/set-exam-question.component';
import {QuestionBankModule} from "../question-bank/question-bank.module";



@NgModule({
  declarations: [
    ExamComponent,
    ExamAddComponent,
    ExamEditComponent,
    SetExamQuestionComponent
  ],
  imports: [
    CommonModule,
    ExamRoutingModule,
    ClazzModule,
    ReactiveFormsModule,
    PageModule,
    SizeModule,
    PipeModule,
    QuestionBankModule
  ]
})
export class ExamModule { }
