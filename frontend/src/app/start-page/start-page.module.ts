import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {StartPageComponent} from "./start-page.component";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    StartPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PerfectScrollbarModule,
    RouterModule
  ]
})
export class StartPageModule { }
