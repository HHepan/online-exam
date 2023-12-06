import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MyExamComponent} from "./my-exam.component";

const routes: Routes = [
  {
    path: '',
    component: MyExamComponent,
    data: {
      title: '列表'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyExamRoutingModule { }
