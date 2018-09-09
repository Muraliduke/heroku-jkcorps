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
  
  
  
  title.setTitle('Best Project center in chennai | Final year project center in chennai');

    meta.addTags([
      { name: 'author',   content: 'jkelectrocorps.in'},
      { name: 'keywords', content: 'JK electrocorps - Final Year project center in chennai, Best project center in chennai, Best IEEE project center in Chennai, Best Java,IOT,Embedded,Dot Net,Power electronics training and Project center in chennai.+ '},
      { name: 'description', content: 'Having a hard time in doing final year projects?call-9551075056 we are the Best project center in chennai to take you ahead with free demo and training' }
    ]);

  }


  ngOnInit() {
    
  }

}
