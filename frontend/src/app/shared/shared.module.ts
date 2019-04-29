import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgMaterialsModule} from "./ng-materials/ng-materials.module";
import {CoreServicesModule} from "./core-services/core-services.module";
import {NotificationModule} from "./notification/notification.module";

@NgModule ({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgMaterialsModule,
    CoreServicesModule,
    NotificationModule
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    NgMaterialsModule,
    CoreServicesModule,
    NotificationModule
],
  declarations: []
})

export class SharedModule {

}
