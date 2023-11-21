import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {QuestionBankComponent} from "./question-bank.component";
import {DialogEntryComponent} from "../common/dialog-entry/dialog-entry.component";
import {QuestionBankAddComponent} from "./question-bank-add/question-bank-add.component";
import {QuestionBankEditComponent} from "./question-bank-edit/question-bank-edit.component";

const routes: Routes = [
  {
    path: '',
    component: QuestionBankComponent,
    data: {
      title: '列表'
    },
    children: [
      {
        path: 'add',
        component: DialogEntryComponent,
        data: {
          component: QuestionBankAddComponent
        }
      },
      {
        path: 'edit/:id',
        component: DialogEntryComponent,
        data: {
          component: QuestionBankEditComponent
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionBankRoutingModule { }
