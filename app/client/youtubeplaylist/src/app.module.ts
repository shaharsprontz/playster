import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormValidationComponent } from './register/login.component';
import { UserplaylistComponent } from './userplaylist/userplaylist.component';
import { AppComponent } from "app.component";
import { YoutubeapiComponent } from './youtubeapi/youtubeapi.component';
//import { AlertModule } from 'ng2-bootstrap';
import { HomepageComponent } from './homepage/homepage.component';

import 'angular2-universal/polyfills';
import * as path from 'path';
import * as express from 'express';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomepageComponent,
  },
  {
    path: 'playlist',
    component: UserplaylistComponent,
  },
  {
    path: 'youtubeapi',
    component: YoutubeapiComponent,
  },
  {
    path: 'complex-form',
    component: FormValidationComponent,
  }];

@NgModule({
  declarations: [
    AppComponent,
    FormValidationComponent,
    UserplaylistComponent,
    YoutubeapiComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
   // AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }