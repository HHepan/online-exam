import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StudentComponent} from "./student.component";
import {DialogEntryComponent} from "../common/dialog-entry/dialog-entry.component";
import {StudentAddComponent} from "./student-add/student-add.component";
import {StudentEditComponent} from "./student-edit/student-edit.component";
import {SystemConfigComponent} from "../system-config/system-config.component";

const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    data: {
      title: '列表'
    },
    children: [
      {
        path: 'add',
        component: DialogEntryComponent,
        data: {
          component: StudentAddComponent
        }
      },
      {
        path: 'edit/:id',
        component: DialogEntryComponent,
        data: {
          component: StudentEditComponent
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
export class StudentRoutingModule { }
