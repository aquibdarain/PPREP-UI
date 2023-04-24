import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TechnicalComponent } from './technical/technical.component';
import { JobsComponent } from './jobs/jobs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AptitudeComponent } from './aptitude/aptitude.component';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'blogs',
    component: BlogsComponent,
  },
  {
    path: 'job',
    component: JobsComponent,
  },
  {
    path: 'technical',
    component: TechnicalComponent,
  },
  {
    path: 'aptitude',
    component: AptitudeComponent,
  },
];

@NgModule({
  declarations: [
    UserComponent,
    BlogsComponent,
    TechnicalComponent,
    JobsComponent,
    DashboardComponent,
    AptitudeComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ComponentsModule {}
