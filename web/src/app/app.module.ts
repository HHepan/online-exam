import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LayoutModule} from "./part/layout/layout.module";
import { SystemConfigComponent } from './system-config/system-config.component';
import {DialogEntryModule} from "./common/dialog-entry/dialog-entry.module";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SystemConfigComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        LayoutModule,
        DialogEntryModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
