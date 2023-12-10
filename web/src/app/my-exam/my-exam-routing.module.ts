import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {MyExamComponent} from "./my-exam.component";
import {ExamingComponent} from "./examing/examing.component";
import {StuViewExamComponent} from "./stu-view-exam/stu-view-exam.component";

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
  },
  {
    path: 'stu-view-exam/:id',
    component: StuViewExamComponent,
    data: {
      title: '查看详情'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyExamRoutingModule { }
