import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
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
  declarations: [LandingPageComponent, FooterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
