import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionBankComponent } from './question-bank.component';
import {QuestionBankRoutingModule} from "./question-bank-routing.module";
import { QuestionBankAddComponent } from './question-bank-add/question-bank-add.component';
import { QuestionBankEditComponent } from './question-bank-edit/question-bank-edit.component';



@NgModule({
  declarations: [
    QuestionBankComponent,
    QuestionBankAddComponent,
    QuestionBankEditComponent
  ],
  imports: [
    CommonModule,
    QuestionBankRoutingModule
  ]
})
export class QuestionBankModule { }
