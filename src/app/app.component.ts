import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  darkTheme: boolean = false;
  schema = {
    "@context": "http://schema.org",
    "@id": "kg:/g/11df0pfn6m",
    "name": "Servicentro",
    "@type": [
      "Thing",
      "MusicGroup"
    ],
    "url": "http://www.servicentro.cl",
    "image": "http://www.servicentro.cl/images/ServicentroBanda.png",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/7/73/Servicentro2.png",
    "sameAs": [
      "http://www.facebook.com/Servicentrocl",
      "http://twitter.com/Servicentro_cl",
      "http://www.instagram.com/servicentrocl/",
      "http://plus.google.com/108680490166455718892",
      "http://www.youtube.com/channel/UCzh_MtK7xNV14i4THYnUYIQ",
      "http://es.wikipedia.org/wiki/Servicentro",
      "http://www.wikidata.org/wiki/Q29788531",
      "http://commons.wikimedia.org/wiki/Servicentro",
      "http://play.google.com/store/music/artist/Servicentro?id=Agn2sqnuqkok4jwqgc4lwloy3xm",
      "http://open.spotify.com/artist/3Saso3ghsK3PYSromArnYW",
      "http://www.deezer.com/artist/12473514",
      "http://itunes.apple.com/cl/artist/servicentro/id1237982586"
    ],
    "description": "Somos un punto de encuentro en el camino, una banda, una experiencia de Rock. Detente un momento y escucha, celebra, ama y carga energías. Luego puedes continuar tu ruta, en tu maleta… hemos dejado un mensaje.",
    "potentialAction": {
      "@type": "ListenAction",
      "target": [
        {
          "@type": "EntryPoint",
          "urlTemplate": "http://www.servicentro.cl/",
          "actionPlatform": [
            "http://schema.org/DesktopWebPlatform",
            "http://schema.org/IOSPlatform",
            "http://schema.org/AndroidPlatform"
          ],
          "InLanguage": "ES"
        }
      ],
      "expectsAcceptanceOf": {
        "@type": "Offer",
        "eligibleRegion": []
      }
    }
  };
}
