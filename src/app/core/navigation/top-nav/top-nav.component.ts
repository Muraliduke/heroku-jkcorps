import { Component, OnInit } from '@angular/core';
import {NavService} from '../nav-service';
import {nav as navitmes} from './nav-models';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  public navs:any;
  constructor(public navService: NavService) { 
    this.navs =  new navitmes();
  }

  ngOnInit() {
    
  }

}