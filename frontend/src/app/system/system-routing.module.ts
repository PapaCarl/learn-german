import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {SystemComponent} from "./system.component";
import {LessonsComponent} from "./lessons/lessons.component";
import {TrainersComponent} from "./trainers/trainers.component";

const routes: Routes = [
  {
    path: '', component: SystemComponent, children: [
      {path: 'lessons', component: LessonsComponent},
      {path: 'trainers', component: TrainersComponent}
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class SystemRoutingModule {

}
