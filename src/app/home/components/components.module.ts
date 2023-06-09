import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { BlogsComponent } from './blogs/blogs.component';
import { TechnicalComponent } from './technical/technical.component';
import { JobsComponent } from './jobs/jobs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AptitudeComponent } from './aptitude/aptitude.component';

import { Routes, RouterModule } from '@angular/router';
import { TcsComponent } from './blogComponent/tcs/tcs.component';
import { CognizantComponent } from './blogComponent/cognizant/cognizant.component';
import { MicrosoftComponent } from './blogComponent/microsoft/microsoft.component';
import { ApplyJobsComponent } from './apply-jobs/apply-jobs.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
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
  // blogs routing
  {
    path:'tcsBlog', component: TcsComponent
  },
  {
    path:'cognizantBlog', component: CognizantComponent
  },
  {
    path:'microsoftBlog', component: MicrosoftComponent
  },
  // jobs
  {
    path:'applyJob',component: ApplyJobsComponent
  }
];

@NgModule({
  declarations: [
    UserComponent,
    BlogsComponent,
    TechnicalComponent,
    JobsComponent,
    DashboardComponent,
    AptitudeComponent,
    TcsComponent,
    CognizantComponent,
    MicrosoftComponent,
    ApplyJobsComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes),ReactiveFormsModule],
})
export class ComponentsModule {}
