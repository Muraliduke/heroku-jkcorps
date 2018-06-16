import { Component, OnInit } from '@angular/core';
import { nav  } from '../navigation/top-nav/nav-models'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public menus: any;
  constructor() { 
    this.menus = new nav();
    
    
  }

  ngOnInit() {
  }

}
