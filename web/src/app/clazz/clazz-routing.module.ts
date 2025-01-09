import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ClazzComponent} from "./clazz.component";
import {DialogEntryComponent} from "../common/dialog-entry/dialog-entry.component";
import {ClazzAddComponent} from "./clazz-add/clazz-add.component";
import {ClazzEditComponent} from "./clazz-edit/clazz-edit.component";
import {SystemConfigComponent} from "../system-config/system-config.component";

const routes: Routes = [
  {
    path: '',
    component: ClazzComponent,
    data: {
      title: '列表'
    },
    children: [
      {
        path: 'add',
        component: DialogEntryComponent,
        data: {
          component: ClazzAddComponent
        }
      },
      {
        path: 'edit/:id',
        component: DialogEntryComponent,
        data: {
          component: ClazzEditComponent
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
export class ClazzRoutingModule { }
