import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {NgMaterialsComponent} from "./shared/ng-materials/ng-materials.component";
import {AuthComponent} from "./auth/auth.component";

const routes: Routes = [
  {
    path: '', redirectTo: 'start-page', pathMatch: 'full'
  },
  {
    path: 'auth', component: AuthComponent
  },
  {
    path: 'materials', component: NgMaterialsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
