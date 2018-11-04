import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutUsContainerComponent} from './about-us.container';

const routes: Routes = [
    { path: 'Aboutus',  component: AboutUsContainerComponent }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]
})
export class AboutUsRoutingModule {
}
