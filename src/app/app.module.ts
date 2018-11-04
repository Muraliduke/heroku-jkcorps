import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

import { AppComponent } from './core/app.component';
// modules here
import {HomeModule} from './home/home.module';
import {ContactModule} from './contact/contact.module';
import { ProjectsModule } from './projects/projects.module';
import { AboutUsModule } from './about-us/about-us.module';
import { NotfoundComponent } from './not-found/notfound.component';

@NgModule({
  declarations: [
 NotfoundComponent],
  imports: [
  CommonModule,
  NgtUniversalModule,
  RouterModule,
  HttpClientModule,
  CoreModule,
  BrowserAnimationsModule,
  NgbModule.forRoot(),
  HomeModule,
  ContactModule,
  ProjectsModule,
  AboutUsModule
 ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
