import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorComponent} from "./error.component";
import {RouterModule, Routes} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";

const routes : Routes = [
  {
    path: '',
    component: ErrorComponent
  }
]

@NgModule({
  declarations: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule
  ],
  exports: [
    ErrorComponent
  ]
})
export class ErrorModule { }
