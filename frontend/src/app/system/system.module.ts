import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import { SystemComponent } from './system.component';
import { LessonsComponent } from './lessons/lessons.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { TrainersComponent } from './trainers/trainers.component';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [SystemComponent, LessonsComponent, HeaderMenuComponent, TrainersComponent]
})
export class SystemModule {

}
