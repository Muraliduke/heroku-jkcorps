import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {HomeContainer} from './home.container';
import { NotfoundComponent } from '../not-found/notfound.component'

const routes: Routes=[
    { path: 'final-year-project-center',  component: HomeContainer }

] 


@NgModule({
  imports: [RouterModule.forChild(routes)],
 
  exports: [RouterModule]
})
export class HomeRoutingModule {}