import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from "./home.component";
import { RouterModule, Routes } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { ReserveComponent } from './reserve/reserve.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'reserve',
    component: ReserveComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    ReserveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
