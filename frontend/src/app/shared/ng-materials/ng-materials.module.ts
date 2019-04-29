import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgMaterialsComponent } from './ng-materials.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatRadioModule} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [NgMaterialsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule

  ]
})
export class NgMaterialsModule { }
