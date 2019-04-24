import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgMaterialsModule} from "./ng-materials/ng-materials.module";
import {CoreServicesModule} from "./core-services/core-services.module";

@NgModule ({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgMaterialsModule,
    CoreServicesModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    NgMaterialsModule,
    CoreServicesModule
],
  declarations: []
})

export class SharedModule {

}
