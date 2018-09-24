import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  profile:any;

  constructor() { 
    this.profile = [
      {
        'name': 'MURALI',
        'education': 'IT SOFTWARE PROFESSIONAL',
        'description': 'HAS A GOOD EXPERIENCE IN USER INTERACTIONS AND DEVELOPMENT OF REAL TIME PROJECTS',

      },
      {
        'name': 'FFGF',
        'education': 'IT SOFTWARE PROFESSIONAL',
        'description': 'HAS A GOOD EXPERIENCE IN USER INTERACTIONS AND DEVELOPMENT OF REAL TIME PROJECTS',

      },
      {
        'name': 'GGG',
        'education': 'IT SOFTWARE PROFESSIONAL',
        'description': 'HAS A GOOD EXPERIENCE IN USER INTERACTIONS AND DEVELOPMENT OF REAL TIME PROJECTS',

      }

    ]
  }

  ngOnInit() {
  }

}
