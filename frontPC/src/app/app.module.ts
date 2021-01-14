import { NgModule } from '@angular/core';

/*MODULES*/
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*COMPONENTS*/
import { AppComponent } from './app.component';
import { SignInComponent } from './main-page/sign-in/sign-in.component';
import { SignUpComponent } from './main-page/sign-up/sign-up.component';
import { HomeComponent } from './main-page/home/home.component';
import { ContactComponent } from './main-page/contact/contact.component';
import { NavBarComponent } from './main-page/nav-bar/nav-bar.component';

/*ROUTES*/
import { APP_ROUTING } from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    ContactComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
