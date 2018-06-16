import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NavItem} from '../nav-model';

@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.scss']
})
export class MenuToolbarComponent implements OnInit {
  @Input() items: NavItem[];
  @ViewChild('childMenu') public childMenu;

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
