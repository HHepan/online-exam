import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./part/layout/layout.component";
import {DialogEntryComponent} from "./common/dialog-entry/dialog-entry.component";
import {SystemConfigComponent} from "./system-config/system-config.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        data: {
          title: '首页'
        }
      },
      {
        path: 'teacher',
        loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule),
        data: {
          title: '教师管理'
        }
      },
      {
        path: 'student',
        loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
        data: {
          title: '学生管理'
        }
      },
      {
        path: 'course',
        loadChildren: () => import('./course/course.module').then(m => m.CourseModule),
        data: {
          title: '课程管理'
        }
      },
      {
        path: 'clazz',
        loadChildren: () => import('./clazz/clazz.module').then(m => m.ClazzModule),
        data: {
          title: '班级管理'
        }
      },
      {
        path: 'personal',
        loadChildren: () => import('./personal/personal.module').then(m => m.PersonalModule),
        data: {
          title: '个人中心'
        }
      },
      {
        path: 'systemConfig',
        component: DialogEntryComponent,
        data: {
          component: SystemConfigComponent
        }
      },
      {
        path: 'questionBank',
        loadChildren: () => import('./question-bank/question-bank.module').then(m => m.QuestionBankModule),
        data: {
          title: '题库管理'
        }
      },
      {
        path: 'exam',
        loadChildren: () => import('./exam/exam.module').then(m => m.ExamModule),
        data: {
          title: '考试管理'
        }
      },
      {
        path: 'my-exam',
        loadChildren: () => import('./my-exam/my-exam.module').then(m => m.MyExamModule),
        data: {
          title: '我的考试'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
