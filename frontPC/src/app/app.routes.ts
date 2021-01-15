import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './main-page/home/home.component';
import {ContactComponent} from './main-page/contact/contact.component';
import {SignUpComponent} from './main-page/sign-up/sign-up.component';
import {SignInComponent} from './main-page/sign-in/sign-in.component';
import {NavBarComponent} from './main-page/nav-bar/nav-bar.component';
import {StoreComponent} from './main-page/store/store.component';
import {ProductDetailComponent} from './main-page/product/product-detail/product-detail.component';
import {AddProductComponent} from './main-page/add-product/add-product.component';

const APP_ROUTES: Routes = [
  { path: 'navbar', component: NavBarComponent},
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'store', component: StoreComponent},
  { path: 'product/:productId', component: ProductDetailComponent },
  { path: 'add-product', component: AddProductComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home' }//redirectTo: 'home'
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
