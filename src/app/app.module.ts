import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent} from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "./app-routing.module";
import {SignupPageComponent} from "./signup-page/signup-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {ResetPasswordComponent} from "./login-page/reset-password.component";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {AuthService} from "./services/auth.service";
import {DashboardComponent, DialogOverviewExampleDialog} from "./Dashboard/Dashboard.component";
import {AuthGuardService} from "./services/auth-guard.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginPageComponent,
    SignupPageComponent,
    ResetPasswordComponent,
    DialogOverviewExampleDialog,
    ResetPasswordComponent
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
