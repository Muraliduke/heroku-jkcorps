import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pictures = [
    {
      id: 1,
      title: 'Embedded Systems',
      img: 'http://res.cloudinary.com/dvotky5lf/image/upload/v1532790934/embedded_dag03n.jpg'
    },
    {
      id: 2,
      title: 'Power Electronics',
      img: 'http://res.cloudinary.com/dvotky5lf/image/upload/v1532789517/powerelec_nae2ry.jpg'
    },
    {
      id: 3,
      title: 'Mat Lab',
      img: 'http://res.cloudinary.com/dvotky5lf/image/upload/v1532789520/matlab_dgxtvm.jpg'
    },
    {
      id: 4,
      title: ' Java',
      img: 'http://res.cloudinary.com/dvotky5lf/image/upload/v1532790935/java_voebli.jpg'
    },
    {
      id: 5,
      title: 'Dot Net',
      img: 'http://res.cloudinary.com/dvotky5lf/image/upload/v1532790911/dotnet_kbpfiz.png'
    },
    {
      id: 6,
      title: 'IOT',
      img: 'http://res.cloudinary.com/dvotky5lf/image/upload/v1532790934/iot_suxuuj.jpg'
    },
  ]; 

}
