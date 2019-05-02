import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../shared/shared.module";
import { SystemComponent } from './system.component';
import { LessonsComponent } from './lessons/lessons.component';
import { TrainersComponent } from './trainers/trainers.component';
import { LessonFirstComponent } from './lessons/lesson-first/lesson-first.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    SystemComponent,
    LessonsComponent,
    TrainersComponent,
    LessonFirstComponent
  ]
})
export class SystemModule {

}
