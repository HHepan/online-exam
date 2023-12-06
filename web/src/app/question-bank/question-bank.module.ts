import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionBankComponent } from './question-bank.component';
import {QuestionBankRoutingModule} from "./question-bank-routing.module";
import { QuestionBankAddComponent } from './question-bank-add/question-bank-add.component';
import { QuestionBankEditComponent } from './question-bank-edit/question-bank-edit.component';
import {CourseModule} from "../course/course.module";
import {ClazzModule} from "../clazz/clazz.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SizeModule} from "../common/size/size.module";
import {PageModule} from "../common/page/page.module";
import { SetQuestionComponent } from './set-question/set-question.component';
import { QuestionBankSelectComponent } from './question-bank-select/question-bank-select.component';



@NgModule({
  declarations: [
    QuestionBankComponent,
    QuestionBankAddComponent,
    QuestionBankEditComponent,
    SetQuestionComponent,
    QuestionBankSelectComponent
  ],
  exports: [
    QuestionBankSelectComponent
  ],
  imports: [
    CommonModule,
    QuestionBankRoutingModule,
    CourseModule,
    ClazzModule,
    FormsModule,
    ReactiveFormsModule,
    SizeModule,
    PageModule
  ]
})
export class QuestionBankModule { }
