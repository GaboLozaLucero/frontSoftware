import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './main-page/home/home.component';
import {ContactComponent} from './main-page/contact/contact.component';
import {SignUpComponent} from './main-page/sign-up/sign-up.component';
import {SignInComponent} from './main-page/sign-in/sign-in.component';
import {NavBarComponent} from './main-page/nav-bar/nav-bar.component';
import {StoreComponent} from './main-page/store/store.component';

const APP_ROUTES: Routes = [
  { path: 'navbar', component: NavBarComponent},
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'store', component: StoreComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }//redirectTo: 'home'
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
