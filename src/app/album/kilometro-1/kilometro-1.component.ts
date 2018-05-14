import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kilometro-1',
  templateUrl: './kilometro-1.component.html',
  styleUrls: ['./kilometro-1.component.css']
})
export class Kilometro1Component implements OnInit {
  schema = {
    "@context": "http://schema.org",
    "@id": "kg:/g/11c82qmxtv",
    "name": "Kilómetro 1",
    "@type": [
      "Thing",
      "MusicAlbum"
    ],
    "image": [
      "https://commons.wikimedia.org/wiki/File:Kil%C3%B3metro_1.jpg"
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
