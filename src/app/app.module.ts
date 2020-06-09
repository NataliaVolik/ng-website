import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { ErrorComponent } from './error/error.component';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {NavbarModule} from "./navbar/navbar.module";





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ErrorComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    NavbarModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
