import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TeacherComponent} from "./teacher.component";
import {DialogEntryComponent} from "../common/dialog-entry/dialog-entry.component";
import {TeacherAddComponent} from "./teacher-add/teacher-add.component";
import {TeacherEditComponent} from "./teacher-edit/teacher-edit.component";

const routes: Routes = [
  {
    path: '',
    component: TeacherComponent,
    data: {
      title: '列表'
    },
    children: [
      {
        path: 'add',
        component: DialogEntryComponent,
        data: {
          component: TeacherAddComponent
        }
      },
      {
        path: 'edit/:id',
        component: DialogEntryComponent,
        data: {
          component: TeacherEditComponent
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
