import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalComponent } from './personal.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import {PersonalRoutingModule} from "./personal-routing.module";
import { PersonalEditComponent } from './personal-edit/personal-edit.component';
import {DialogEntryModule} from "../common/dialog-entry/dialog-entry.module";



@NgModule({
  declarations: [
    PersonalComponent,
    UpdatePasswordComponent,
    PersonalEditComponent
  ],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    DialogEntryModule
  ]
})
export class PersonalModule { }
