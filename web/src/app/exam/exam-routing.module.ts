import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ExamComponent} from "./exam.component";
import {DialogEntryComponent} from "../common/dialog-entry/dialog-entry.component";
import {ExamAddComponent} from "./exam-add/exam-add.component";
import {ExamEditComponent} from "./exam-edit/exam-edit.component";
import {SetExamQuestionComponent} from "./set-exam-question/set-exam-question.component";

const routes: Routes = [
  {
    path: '',
    component: ExamComponent,
    data: {
      title: '列表'
    },
    children: [
      {
        path: 'add',
        component: DialogEntryComponent,
        data: {
          component: ExamAddComponent
        }
      },
      {
        path: 'edit/:id',
        component: DialogEntryComponent,
        data: {
          component: ExamEditComponent
        }
      }
    ]
  },
  {
    path: 'set-exam-question/:id',
    component: SetExamQuestionComponent,
    data: {
      title: '设置题目'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
