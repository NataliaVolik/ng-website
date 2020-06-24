import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "./contact.component";
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


const routes : Routes = [
  {
    path: '',
    component: ContactComponent
  }
]

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule { }
