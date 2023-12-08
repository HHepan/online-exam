import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyExamComponent } from './my-exam.component';
import {MyExamRoutingModule} from "./my-exam-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PageModule} from "../common/page/page.module";
import {PipeModule} from "../pipe/pipe.module";
import {SizeModule} from "../common/size/size.module";
import { ExamingComponent } from './examing/examing.component';



@NgModule({
  declarations: [
    MyExamComponent,
    ExamingComponent
  ],
  imports: [
    CommonModule,
    MyExamRoutingModule,
    FormsModule,
    PageModule,
    PipeModule,
    ReactiveFormsModule,
    SizeModule
  ]
})
export class MyExamModule { }
