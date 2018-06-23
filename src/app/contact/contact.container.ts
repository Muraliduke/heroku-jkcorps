import { Component, OnInit } from '@angular/core';
import { AppContactComponent } from './components/app-contact/app-contact.component'

@Component({
  selector: 'app-contact-container',
  template: `
    <app-contact></app-contact>
  `,
  styleUrls: ['./contact.container.scss']
})
export class ContactContainer implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
