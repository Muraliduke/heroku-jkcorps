import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home-container',
  template: `
    <app-home></app-home>
  `,
  styleUrls: ['./home.container.scss']
})
export class HomeContainer implements OnInit {

  constructor(meta: Meta, title: Title) {
+
    title.setTitle('JK Electrocorps -Best Final Year Projects in chennai');

    meta.addTags([
      { name: 'author',   content: 'jkelectrocorps.com'},
      { name: 'keywords', content: 'engineering projects,diploma projects,M.E projects'},
      { name: 'description', content: 'Best Project centre in chennai' }
    ]);

  }

  ngOnInit() {
  }

}
