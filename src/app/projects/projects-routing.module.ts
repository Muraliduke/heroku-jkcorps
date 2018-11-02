import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {ProjectsContainer} from './projects.container';

const routes: Routes=[
    { path: 'ieee/:id',  component: ProjectsContainer }

] 


@NgModule({
  imports: [RouterModule.forChild(routes)],
 
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}