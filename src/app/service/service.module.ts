import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServiceComponent} from "./service.component";
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

const routes : Routes = [
    {
      path: '',
      component: ServiceComponent
    }
  ]

@NgModule({
  declarations: [
    ServiceComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    ServiceComponent
  ]
})
export class ServiceModule { }
