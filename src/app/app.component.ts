import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSidenav, DateAdapter } from '@angular/material';

import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  sidenavActive: boolean;

  constructor(
  private location: Location,
  private authService: AuthService) {

  }
  ngOnInit() {
    if (this.location.path() === '/callback') {
      this.authService.handleAuthentication();
    } else {
      if (!this.authService.isAuthenticated()) {
        this.authService.login();
      }
    }

    this.sidenav.openedChange.subscribe( drawer => {
      this.sidenavActive = drawer;
    });
  }
}
