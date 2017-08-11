import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MaterialModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Router, RouterModule  } from '@angular/router';
import { HttpModule, Http, RequestOptions } from '@angular/http';

import * as svc from './core/services/index';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { CallbackComponent } from './auth/callback/callback.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    ProjectsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    svc.AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
