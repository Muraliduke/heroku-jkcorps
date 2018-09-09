import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ProjectsContainer} from './projects.container';
import {ProjectsComponent} from './components/projects/projects.component';

import {ProjectsRoutingModule} from './projects-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {CoreModule} from '../core/core.module';
@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    CoreModule 
  ],
  declarations: [
    
    ProjectsContainer,
    ProjectsComponent,
  ], 
  providers: [],
  exports: []
})
export class ProjectsModule {}