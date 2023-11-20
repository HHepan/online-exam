import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./part/layout/layout.module";
import { ClazzEditComponent } from './clazz/clazz-edit/clazz-edit.component';
import { ClazzAddComponent } from './clazz/clazz-add/clazz-add.component';
import { SystemConfigComponent } from './system-config/system-config.component';
import {DialogEntryModule} from "./common/dialog-entry/dialog-entry.module";

@NgModule({
  declarations: [
    AppComponent,
    SystemConfigComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    DialogEntryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
