import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {DialogEntryComponent} from "../common/dialog-entry/dialog-entry.component";
import {SystemConfigComponent} from "../system-config/system-config.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: '欢迎您'
    },
    children: [
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

export class DashboardRoutingModule { }
