import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {ServiceComponent} from "./service/service.component";
import {ContactComponent} from "./contact/contact.component";
import {ErrorComponent} from "./error/error.component";
import {AboutReadMoreComponent} from "./about-read-more/about-read-more.component";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: 'about', component: AboutComponent,
    children: [
      {path: 'about-read-more', component: AboutReadMoreComponent}
    ]
  },
  {path: 'service', component: ServiceComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
