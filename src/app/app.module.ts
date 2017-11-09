import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter, MATERIAL_COMPATIBILITY_MODE} from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { Router, RouterModule  } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppMaterialModule } from './core/shared/material.module';

import * as svc from './core/services/index';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { CallbackComponent } from './auth/callback/callback.component';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppMaterialModule,
    RouterModule.forRoot(ROUTES),
    PagesModule.forRoot()
  ],
  providers: [
    { provide: MATERIAL_COMPATIBILITY_MODE, useValue: true },
    svc.AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
