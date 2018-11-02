import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

import { filter, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-project-container',
  template: `
    <app-projects></app-projects>
  `,
  styleUrls: ['./projects.container.scss']
})
export class ProjectsContainer implements OnInit {

  private sub: any;
  constructor(meta: Meta, title: Title) {


  }


  ngOnInit() {
    
  }

}
