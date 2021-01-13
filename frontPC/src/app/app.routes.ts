import { RouterModule, Routes } from '@angular/router';

import {HeaderComponent} from './main-page/header/header.component';
import {HomeComponent} from './main-page/home/home.component';
import {ContactComponent} from './main-page/contact/contact.component';
import {SignUpComponent} from './main-page/sign-up/sign-up.component';
import {SignInComponent} from './main-page/sign-in/sign-in.component';


const APP_ROUTES: Routes = [
  { path: 'header', component: HeaderComponent},
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }//redirectTo: 'home'
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
