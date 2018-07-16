import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  pagina: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { pagina: string }) => {
        this.pagina = data.pagina;
      });
  }

}
