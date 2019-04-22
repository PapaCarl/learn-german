import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgMaterialsModule} from "./ng-materials/ng-materials.module";

@NgModule ({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgMaterialsModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    NgMaterialsModule
],
  declarations: []
})

export class SharedModule {

}
