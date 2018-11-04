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

  pictures = [
    {
      id: 1,
      title: 'Embedded Systems',
      link: '/ieee/embedded-systems-projects',
      img: 'http://res.cloudinary.com/dvotky5lf/image/upload/v1532790934/embedded_dag03n.jpg'
    },
    {
      id: 2,
      title: 'Power Electronics',
      link: '/ieee/power-electronics-projects',
      img: 'http://res.cloudinary.com/dvotky5lf/image/upload/v1532789517/powerelec_nae2ry.jpg'
    },
    {
      id: 3,
      title: 'Mat Lab',
      link: '/ieee/matlab-projects',
      img: 'http://res.cloudinary.com/dvotky5lf/image/upload/v1532789520/matlab_dgxtvm.jpg'
    },
    {
      id: 4,
      title: ' Java',
      link: '/ieee/java-projects',
      img: 'http://res.cloudinary.com/dvotky5lf/image/upload/v1532790935/java_voebli.jpg'
    },
    {
      id: 5,
      title: 'Dot Net',
      link: '/ieee/dotnet-projects',
      img: 'http://res.cloudinary.com/dvotky5lf/image/upload/v1532790911/dotnet_kbpfiz.png'
    },
    {
      id: 6,
      title: 'IOT',
      link: '/ieee/IOT-projects',
      img: 'http://res.cloudinary.com/dvotky5lf/image/upload/v1532790934/iot_suxuuj.jpg'
    },
  ]; 

  ngOnInit() {
  }

}
