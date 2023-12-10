import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ExamComponent} from "./exam.component";
import {DialogEntryComponent} from "../common/dialog-entry/dialog-entry.component";
import {ExamAddComponent} from "./exam-add/exam-add.component";
import {ExamEditComponent} from "./exam-edit/exam-edit.component";
import {SetExamQuestionComponent} from "./set-exam-question/set-exam-question.component";
import {ExamSituationComponent} from "./exam-situation/exam-situation.component";
import {TchViewExamComponent} from "./tch-view-exam/tch-view-exam.component";

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
  },
  {
    path: 'view-exam-question/:id',
    component: SetExamQuestionComponent,
    data: {
      title: '查看题目'
    }
  },
  {
    path: 'exam-situation/:id',
    component: ExamSituationComponent,
    data: {
      title: '考试情况'
    }
  },
  {
    path: 'exam-situation/:examId/tch-view-exam/:studentId',
    component: TchViewExamComponent,
    data: {
      title: '作答详情'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
