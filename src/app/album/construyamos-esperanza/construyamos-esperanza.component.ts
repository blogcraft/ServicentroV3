import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-construyamos-esperanza',
  templateUrl: './construyamos-esperanza.component.html',
  styleUrls: ['./construyamos-esperanza.component.css']
})
export class ConstruyamosEsperanzaComponent implements OnInit {
  schema = {
    "@context": "http://schema.org",
    "name": "Construyamos Esperanza",
    "@type": [
      "Thing",
      "MusicAlbum"
    ],
    "image": [
      "https://commons.wikimedia.org/wiki/File:Construyamos_Esperanza.jpg"
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
