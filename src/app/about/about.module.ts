import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutComponent} from "./about.component";
import {Routes, RouterModule} from "@angular/router";
import {AboutReadMoreComponent} from "./about-read-more/about-read-more.component";

const routes : Routes = [
  // {
  //   path: '',
  //   redirectTo: 'about',
  //   pathMatch: 'full',
  // },
  {
    path: '', component: AboutComponent,
    children: [
      {path: 'about-read-more', component: AboutReadMoreComponent}
    ]
  },
]



@NgModule({
  declarations: [
      AboutComponent,
      AboutReadMoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
      AboutComponent,
      AboutReadMoreComponent
  ]
})
export class AboutModule { }
