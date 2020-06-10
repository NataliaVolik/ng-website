import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServiceComponent} from "./service.component";
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {CategoryComponent} from "./category/category.component";

const routes : Routes = [
    {
      path: '',
      component: ServiceComponent,
      children: [{
        path: ':id',
        component: CategoryComponent
      }]
    }
  ]

@NgModule({
  declarations: [
    ServiceComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    ServiceComponent,
    CategoryComponent
  ]
})
export class ServiceModule { }
