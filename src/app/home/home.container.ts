import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

import { filter, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-home-container',
  template: `
    <app-home></app-home>
  `,
  styleUrls: ['./home.container.scss']
})
export class HomeContainer implements OnInit {

  constructor(meta: Meta, title: Title) {
  
  
  
  title.setTitle('IEEE project Center in Chennai | Best Project center in Chennai');

    meta.addTags([
      { name: 'author',   content: 'jkelectrocorps.in'},
      { name: 'keywords', content: 'Best IEEE project center in Chennai, Final Year project center in Chennai,Best Java,IOT,Embedded,Dot Net,Power electronics Project & Training center in Chennai '},
      { name: 'description', content: 'Jk Electrocorps is one of the best IEEE project center in Chennai offers FREE TRAINING to students, to know more call 9551075056' }
    ]);

  }


  ngOnInit() {
  }

}
