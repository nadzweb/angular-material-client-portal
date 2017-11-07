import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsPageComponent } from './projects-page/projects-page.component';

const pagesRoutes: Routes = [
  { path: 'projects', component: ProjectsPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(pagesRoutes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
