import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-contact',
  templateUrl: './app-contact.component.html',
  styleUrls: ['./app-contact.component.scss']
})
export class AppContactComponent implements OnInit {

  constructor(meta: Meta, title: Title) {

    title.setTitle('JK Electrocorps -Contact Us');

    meta.addTags([
      { name: 'author',   content: 'jkelectrocorps.com'},
      { name: 'keywords', content: 'engineering projects,diploma projects,M.E projects'},
      { name: 'description', content: 'JK Electrocorps -Best Project centre in chennai' }
    ]);

  }

  ngOnInit() {
  }

}
