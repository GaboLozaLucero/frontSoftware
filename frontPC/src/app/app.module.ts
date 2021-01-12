import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './main-page/header/header.component';
import { SignInComponent } from './main-page/sign-in/sign-in.component';
import { SignUpComponent } from './main-page/sign-up/sign-up.component';
import { HomeComponent } from './main-page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
