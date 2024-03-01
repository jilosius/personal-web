import { NgModule } from '@angular/core';
import { CommonModule, NgStyle } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule} from './app.routes';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    NgStyle,
    MatToolbarModule,
    MatIconModule,
    RouterModule
  ]
})
export class AppModule { }
