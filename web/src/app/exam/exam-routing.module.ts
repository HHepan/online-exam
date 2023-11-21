import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ExamComponent} from "./exam.component";
import {DialogEntryComponent} from "../common/dialog-entry/dialog-entry.component";
import {ExamAddComponent} from "./exam-add/exam-add.component";
import {ExamEditComponent} from "./exam-edit/exam-edit.component";

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
