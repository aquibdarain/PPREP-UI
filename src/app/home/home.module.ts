import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: 'page',
    pathMatch: 'full',
  },
  {
    path: 'page',
    component: LandingPageComponent,
  },
];

@NgModule({
  declarations: [
    LandingPageComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
