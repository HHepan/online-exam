import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CourseComponent} from "./course.component";
import {DialogEntryComponent} from "../common/dialog-entry/dialog-entry.component";
import {TeacherAddComponent} from "../teacher/teacher-add/teacher-add.component";
import {TeacherEditComponent} from "../teacher/teacher-edit/teacher-edit.component";
import {CourseAddComponent} from "./course-add/course-add.component";
import {CourseEditComponent} from "./course-edit/course-edit.component";
import {SystemConfigComponent} from "../system-config/system-config.component";

const routes: Routes = [
  {
    path: '',
    component: CourseComponent,
    data: {
      title: '列表'
    },
    children: [
      {
        path: 'add',
        component: DialogEntryComponent,
        data: {
          component: CourseAddComponent
        }
      },
      {
        path: 'edit/:id',
        component: DialogEntryComponent,
        data: {
          component: CourseEditComponent
        }
      },
      {
        path: 'systemConfig',
        component: DialogEntryComponent,
        data: {
          component: SystemConfigComponent
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
