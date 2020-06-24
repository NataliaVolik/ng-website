import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {NavbarModule} from "./navbar/navbar.module";
import { FooterComponent } from './footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,



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
