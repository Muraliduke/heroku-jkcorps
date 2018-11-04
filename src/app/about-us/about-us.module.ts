import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {AboutUsContainerComponent} from './about-us.container';
import {AboutComponent} from './components/about/about.component';
import {AboutUsRoutingModule} from './about-us-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {CoreModule} from '../core/core.module';
@NgModule({
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    CoreModule
  ],
  declarations: [
    AboutUsContainerComponent,
    AboutComponent,
  ],
  providers: [],
  exports: []
})
export class AboutUsModule {}
