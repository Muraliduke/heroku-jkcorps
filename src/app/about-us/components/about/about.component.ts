import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
    selector: 'app-about',
    templateUrl: './app-about.component.html',
    styleUrls: ['./app-about.component.scss']
})

export class AboutComponent implements OnInit {
    constructor(meta: Meta, title: Title) {
  title.setTitle('About us | IEEE project Center in Chennai | Jk Electrocorps');

    meta.addTags([
      { name: 'author',   content: 'jkelectrocorps.in'},
      { name: 'keywords', content: 'Best Java, IOT, Embedded, Raspberry pi, Matlab, Vlsi, Ns2,Ns3,Dot Net, Power electronics, Power system, IEEE Final year Project center in Chennai.'},
      { name: 'description', content: 'Jk Electrocorps is certified Final year IEEE project center in Chennai offers free Demo & training.' }
    ]);

  }

    ngOnInit() { }
}