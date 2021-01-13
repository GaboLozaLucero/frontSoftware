import { NgModule } from '@angular/core';

/*MODULES*/
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*COMPONENTS*/
import { AppComponent } from './app.component';
import { HeaderComponent } from './main-page/header/header.component';
import { SignInComponent } from './main-page/sign-in/sign-in.component';
import { SignUpComponent } from './main-page/sign-up/sign-up.component';
import { HomeComponent } from './main-page/home/home.component';
import { ContactComponent } from './main-page/contact/contact.component';

/*ROUTES*/
import { APP_ROUTING } from "./app.routes";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignInComponent,
    SignUpComponent,
    HomeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
