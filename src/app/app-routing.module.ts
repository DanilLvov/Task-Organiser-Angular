import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./login-page/login-page.component";
import {SignupPageComponent} from "./signup-page/signup-page.component";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {DashboardComponent} from "./Dashboard/Dashboard.component";
import {AuthGuardService as AuthGuard } from "./services/auth-guard.service";

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
