import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClazzComponent } from './clazz.component';
import {ClazzRoutingModule} from "./clazz-routing.module";
import {ClazzEditComponent} from "./clazz-edit/clazz-edit.component";
import {ClazzAddComponent} from "./clazz-add/clazz-add.component";
import {DialogEntryModule} from "../common/dialog-entry/dialog-entry.module";



@NgModule({
  declarations: [
    ClazzComponent,
    ClazzEditComponent,
    ClazzAddComponent
  ],
  imports: [
    CommonModule,
    ClazzRoutingModule,
    DialogEntryModule
  ]
})
export class ClazzModule { }
