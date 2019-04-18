import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from '@angular/common';
import {AuthModule} from "./auth/auth.module";
import {SystemModule} from "./system/system.module";
import {SystemRoutingModule} from "./system/system-routing.module";
import {StartPageModule} from "./start-page/start-page.module";
import {StartPageRoutingModule} from "./start-page/start-page-routing.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    AuthModule,
    SystemModule,
    SystemRoutingModule,
    StartPageModule,
    StartPageRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
