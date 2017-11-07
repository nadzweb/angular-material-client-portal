import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppMaterialModule } from './../core/shared/material.module';

import { ProjectService } from './../core/services/project.service';

import { PagesRoutingModule } from './pages-routing.module';

import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ProjectListComponent } from './projects-page/project-list/project-list.component';
import { ProjectComponent } from './projects-page/project/project.component';


@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, AppMaterialModule, PagesRoutingModule],
  exports: [CommonModule, FormsModule, RouterModule, ProjectsPageComponent, ProjectListComponent, ProjectComponent],
  declarations: [ProjectsPageComponent, ProjectListComponent, ProjectComponent]
})
export class PagesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: PagesModule,
      providers: [ProjectService]
    };
  }
}
