import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { AppContactComponent } from './components/app-contact/app-contact.component';

const routes: Routes=[
    { path: 'contact',  component: AppContactComponent }

] 


@NgModule({
  imports: [RouterModule.forChild(routes)],
 
  exports: [RouterModule]
})
export class ContactRoutingModule {}