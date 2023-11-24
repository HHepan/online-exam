import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClazzComponent } from './clazz.component';
import {ClazzRoutingModule} from "./clazz-routing.module";
import {ClazzEditComponent} from "./clazz-edit/clazz-edit.component";
import {ClazzAddComponent} from "./clazz-add/clazz-add.component";
import {DialogEntryModule} from "../common/dialog-entry/dialog-entry.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PageModule} from "../common/page/page.module";
import {SizeModule} from "../common/size/size.module";
import { ClazzSelectComponent } from './clazz-select/clazz-select.component';



@NgModule({
  declarations: [
    ClazzComponent,
    ClazzEditComponent,
    ClazzAddComponent,
    ClazzSelectComponent
  ],
  exports: [
    ClazzSelectComponent
  ],
  imports: [
    CommonModule,
    ClazzRoutingModule,
    DialogEntryModule,
    FormsModule,
    ReactiveFormsModule,
    PageModule,
    SizeModule
  ]
})
export class ClazzModule { }
