import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';
// import { PingComponent } from './ping/ping.component';
import { CallbackComponent } from './auth/callback/callback.component';

export const ROUTES: Routes = [
 // { path: '', component: HomeComponent },
 { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];
