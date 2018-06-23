import { BrowserModule } from '@angular/platform-browser';

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';

import { AppComponent } from './core/app.component';

//modules here
import {HomeModule} from './home/home.module';
import {ContactModule} from './contact/contact.module'


@NgModule({
  declarations: [
 ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    CoreModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),

    HomeModule,
    ContactModule
 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
