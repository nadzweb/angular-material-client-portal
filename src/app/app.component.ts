import { Component, ViewChild, OnInit, HostListener } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { MaterialModule, MdSidenav, DateAdapter } from '@angular/material';

import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  constructor(
  private authService: AuthService) {

  }
  ngOnInit() {
  	if (!this.authService.isAuthenticated()) {
  	  this.authService.login();
  	}
  	
  }
}
