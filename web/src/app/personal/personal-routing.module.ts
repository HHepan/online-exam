import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {CourseComponent} from "../course/course.component";
import {DialogEntryComponent} from "../common/dialog-entry/dialog-entry.component";
import {CourseAddComponent} from "../course/course-add/course-add.component";
import {CourseEditComponent} from "../course/course-edit/course-edit.component";
import {PersonalComponent} from "./personal.component";
import {TeacherAddComponent} from "../teacher/teacher-add/teacher-add.component";
import {TeacherEditComponent} from "../teacher/teacher-edit/teacher-edit.component";
import {PersonalEditComponent} from "./personal-edit/personal-edit.component";
import {UpdatePasswordComponent} from "./update-password/update-password.component";

const routes: Routes = [
  {
    path: '',
    component: PersonalComponent,
    data: {
      title: '详情'
    },
    children: [
      {
        path: 'edit/:id',
        component: DialogEntryComponent,
        data: {
          component: PersonalEditComponent
        }
      },
      {
        path: 'updatePassword/:id',
        component: DialogEntryComponent,
        data: {
          component: UpdatePasswordComponent
        }
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
