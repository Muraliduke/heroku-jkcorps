import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ContactContainer} from './contact.container';

import {ContactRoutingModule} from './contact-routing.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';

import {CoreModule} from '../core/core.module';
import { AppContactComponent } from './components/app-contact/app-contact.component';
@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    NgbModule.forRoot(),
    CarouselModule.forRoot(),
    CoreModule
  ],
  declarations: [
    
    
    
    AppContactComponent
  ],
  providers: [],
  exports: []
})
export class ContactModule {}