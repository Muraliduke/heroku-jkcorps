import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { filter, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-about-container',
  template: `
    <app-about></app-about>
  `,
  styleUrls: ['./about-us.container.scss']
})
export class AboutUsContainerComponent implements OnInit {

  private sub: any;
  constructor(meta: Meta, title: Title) {


  }


  ngOnInit() {

  }

}
