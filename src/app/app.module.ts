import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {LoginPageComponent} from "./login-page/login-page.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [LoginPageComponent]
})
export class AppModule { }
