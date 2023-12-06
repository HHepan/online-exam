import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExamStatePipe} from './exam-state.pipe';



@NgModule({
  declarations: [
    ExamStatePipe
  ],
  exports: [
    ExamStatePipe
  ],
  imports: [
    CommonModule
  ]
})
export class PipeModule { }
