import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MyExamComponent} from "./my-exam.component";
import {ExamingComponent} from "./examing/examing.component";

const routes: Routes = [
  {
    path: '',
    component: MyExamComponent,
    data: {
      title: '列表'
    }
  },
  {
    path: 'examing/:id',
    component: ExamingComponent,
    data: {
      title: '考试中'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyExamRoutingModule { }
